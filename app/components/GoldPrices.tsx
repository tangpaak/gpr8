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
    async function fetchPrice() {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/commodityprice?name=gold', {
          headers: {
            'X-Api-Key': '+pA1Exep/MSknd4cSkBPqQ==kze8ILt4fkhWIjam'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch gold price');
        }
        const data = await response.json();
        const usdPrice = data.price;
        setPrices({
          USD: usdPrice * 32.151,
          HKD: usdPrice * 32.151 * 7.8,
          CNY: usdPrice * 32.151 * 7.12
        });
      } catch (error) {
        console.error('Error fetching gold price:', error);
        setError('Failed to load gold prices. Please try again later.');
      }
    }
    fetchPrice();
        // Set up interval to fetch every 30 minutes
        const intervalId = setInterval(fetchPrice, 30 * 60 * 1000);

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