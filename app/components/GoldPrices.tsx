// app/components/GoldPrices.tsx
"use client";

import { useState, useEffect } from 'react';

interface GoldPrices {
  USD: number;
  HKD: number;
  CNY: number;
}

interface GoldPricesProps {
  currency: 'USD' | 'HKD' | 'CNY';
}

export function GoldPrices({ currency }: GoldPricesProps) {
  const [prices, setPrices] = useState<GoldPrices | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const CACHE_KEY = 'gold_prices_cache';
    const CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
    // With 12-hour refresh: 2 calls/day = ~60 calls/month (within 100 limit)

    async function fetchPrice() {
      try {
        // Check cache first
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          const now = Date.now();
          if (now - timestamp < CACHE_DURATION) {
            console.log('Using cached gold prices');
            setPrices(data);
            setError(null);
            return;
          }
        }

        const apiKey = process.env.NEXT_PUBLIC_METAL_PRICE_API_KEY || 'e307f4f456188e4d6fb7aa122e53dfa9';
        const response = await fetch(
          `https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=USD&currencies=XAU`
        );
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error:', response.status, errorText);
          throw new Error(`Failed to fetch gold price: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data);
        
        // XAU rate represents how many troy ounces of gold = 1 USD
        // So price per troy ounce = 1 / XAU rate
        // 1 kg = 32.1507 troy ounces
        if (!data.rates || !data.rates.XAU) {
          throw new Error('Invalid response format from API');
        }
        
        const xauRate = data.rates.XAU;
        const pricePerTroyOunce = 1 / xauRate;
        const pricePerKg = pricePerTroyOunce * 32.1507;
        
        const calculatedPrices = {
          USD: pricePerKg * 1.02,
          HKD: pricePerKg * 7.8 * 1.02,
          CNY: pricePerKg * 7.12 * 1.02
        };
        
        setPrices(calculatedPrices);
        setError(null);
        
        // Cache the prices
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: calculatedPrices,
          timestamp: Date.now()
        }));
      } catch (error) {
        console.error('Error fetching gold price:', error);
        setError('Failed to load gold prices. Please try again later.');
      }
    }
    
    fetchPrice();
    // Set up interval to fetch every 12 hours (2 calls/day = ~60 calls/month)
    const intervalId = setInterval(fetchPrice, CACHE_DURATION);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!prices) return <p className="text-gray-500">Loading gold prices...</p>;

  return (
    <div>
      <p className="text-2xl font-bold">${prices[currency].toFixed(2)} {currency} </p>
    </div>
  );
}