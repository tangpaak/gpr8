"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { DollarSign, Globe, Lock, User, Star } from "lucide-react";
import { GoldPrices } from "@/components/GoldPrices";
import { getDictionary } from "../lib/dictionary";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-indigo-200">
        <Link className="flex items-center justify-center" href="#"></Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-indigo-600 transition-colors"
            href={`/${lang}`}
          >
            {dict.navigation.home}
          </Link>
          <Link
            className="text-sm font-medium hover:text-indigo-600 transition-colors"
            href={`/${lang}/about`} // Changed from "/about" to "/${lang}/about"
          >
            {dict.navigation.about}
          </Link>
          <Link
            className="text-sm font-medium hover:text-indigo-600 transition-colors"
            href="#products"
          >
            {dict.navigation.products}
          </Link>
          <Link
            className="text-sm font-medium hover:text-indigo-600 transition-colors"
            href="#faqs"
          >
            {dict.navigation.faqs}
          </Link>
          <Link
            className="text-sm font-medium hover:text-indigo-600 transition-colors"
            href={`/${lang}/contact`} // Use the lang parameter from your page props
          >
            {dict.navigation.contact}
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <div className="w-full py-12 md:py-24 lg:py-32 bg-indigo-900 text-white">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {dict.hero.title}
                </h1>
                <p className="mx-auto max-w-[700px] text-indigo-200 md:text-xl">
                  {dict.hero.subtitle}
                </p>
              </div>
              <div className="space-x-4 mt-6">
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  {dict.hero.viewProducts}
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-indigo-900 border-white hover:bg-indigo-100 hover:text-indigo-900"
                >
                  {dict.hero.learnMore}
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <Image
                src="/images/gold-bars.jpg"
                alt="Gold bars stacked neatly, representing the high-quality products offered by Global Partner & Resources Limited"
                width={2000}
                height={1200}
                className="rounded-lg shadow-lg w-full h-auto object-cover max-w-[800px]"
              />
            </div>
          </div>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-900">
              {dict.products.title}
            </h2>
            <div>
              <Tabs defaultValue="usd" className="w-full max-w-3xl mx-auto">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="usd">{dict.products.USD}</TabsTrigger>
                  <TabsTrigger value="hkd">{dict.products.HKD}</TabsTrigger>
                  <TabsTrigger value="cny">{dict.products.CNY}</TabsTrigger>
                </TabsList>
                <TabsContent value="usd">
                  <Card>
                    <CardHeader className="flex flex-col md:flex-row justify-between items-start">
                      <div className="mb-4 md:mb-0 md:mr-4">
                        <CardTitle>{dict.products.goldBar}</CardTitle>
                        <CardDescription>
                          {dict.products.purity}
                        </CardDescription>
                        <CardContent className="p-0 mt-4">
                          <GoldPrices currency="USD" />
                        </CardContent>
                      </div>
                      <div className="w-full md:w-auto">
                        <Image
                          src="/images/gold-bars2.jpg"
                          alt="Gold bars stacked neatly, representing the high-quality products offered by Global Partner & Resources Limited"
                          width={300}
                          height={150}
                          className="rounded-lg shadow-lg w-full h-auto"
                          priority
                        />
                      </div>
                    </CardHeader>
                  </Card>
                </TabsContent>

                <TabsContent value="hkd">
                  <Card>
                    <CardHeader className="flex flex-col md:flex-row justify-between items-start">
                      <div className="mb-4 md:mb-0 md:mr-4">
                        <CardTitle>{dict.products.goldBar}</CardTitle>
                        <CardDescription>
                          {dict.products.purity}
                        </CardDescription>
                        <CardContent className="p-0 mt-4">
                          <GoldPrices currency="HKD" />
                        </CardContent>
                      </div>
                      <div className="w-full md:w-auto">
                      <Image
                          src="/images/gold-bars2.jpg"
                          alt="Gold bars stacked neatly, representing the high-quality products offered by Global Partner & Resources Limited"
                          width={300}
                          height={150}
                          className="rounded-lg shadow-lg w-full h-auto"
                          priority
                        />
                      </div>
                    </CardHeader>
                  </Card>
                </TabsContent>

                <TabsContent value="cny">
                  <Card>
                    <CardHeader className="flex flex-col md:flex-row justify-between items-start">
                      <div className="mb-4 md:mb-0 md:mr-4">
                        <CardTitle>{dict.products.goldBar}</CardTitle>
                        <CardDescription>
                          {dict.products.purity}
                        </CardDescription>
                        <CardContent className="p-0 mt-4">
                          <GoldPrices currency="CNY" />
                        </CardContent>
                      </div>
                      <div className="w-full md:w-auto relative">
                      <Image
                          src="/images/gold-bars2.jpg"
                          alt="Gold bars stacked neatly, representing the high-quality products offered by Global Partner & Resources Limited"
                          width={300}
                          height={150}
                          className="rounded-lg shadow-lg w-full h-auto"
                          priority
                        />
                      </div>
                    </CardHeader>
                  </Card>
                </TabsContent>
              </Tabs>
              <div>
                {" "}
                <p className="text-sm text-gray-500 mt-2 text-center">
                  {dict.products.priceReference}
                </p>
              </div>
              <div className="mt-8 flex justify-center space-x-4">
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                  {dict.products.buy}
                </Button>
                <Button
                  variant="outline"
                  className="bg-red-500 text-white hover:bg-red-600"
                >
                  {dict.products.sell}
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-900">
              {dict.whyChooseUs.title}
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border-indigo-200 p-4 rounded-lg">
                <DollarSign className="h-8 w-8 text-indigo-600" />
                <h3 className="text-xl font-bold text-indigo-900">
                  {dict.whyChooseUs.competitivePrices.title}
                </h3>
                <p className="text-sm text-indigo-600 text-center">
                  {dict.whyChooseUs.competitivePrices.description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-indigo-200 p-4 rounded-lg">
                <Lock className="h-8 w-8 text-indigo-600" />
                <h3 className="text-xl font-bold text-indigo-900">
                  {dict.whyChooseUs.secureTransactions.title}
                </h3>
                <p className="text-sm text-indigo-600 text-center">
                  {dict.whyChooseUs.secureTransactions.description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-indigo-200 p-4 rounded-lg">
                <User className="h-8 w-8 text-indigo-600" />
                <h3 className="text-xl font-bold text-indigo-900">
                  {dict.whyChooseUs.exceptionalService.title}
                </h3>
                <p className="text-sm text-indigo-600 text-center">
                  {dict.whyChooseUs.exceptionalService.description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-indigo-200 p-4 rounded-lg">
                <Globe className="h-8 w-8 text-indigo-600" />
                <h3 className="text-xl font-bold text-indigo-900">
                  {dict.whyChooseUs.internationalReach.title}
                </h3>
                <p className="text-sm text-indigo-600 text-center">
                  {dict.whyChooseUs.internationalReach.description}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-900">
              {dict.testimonials.title}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>John Doe</CardTitle>
                  <CardDescription>
                    {dict.testimonials.roles.investor}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">
                    "{dict.testimonials.reviews.johnDoe}"
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Jane Smith</CardTitle>
                  <CardDescription>
                    {dict.testimonials.roles.financialAdvisor}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">
                    "{dict.testimonials.reviews.janeSmith}"
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sarah Chen</CardTitle>
                  <CardDescription>
                    {dict.testimonials.roles.internationalTrader}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">
                    "{dict.testimonials.reviews.sarahChen}"
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-900">
              {dict.learn.title}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>{dict.learn.basics.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">
                    {dict.learn.basics.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="text-indigo-600 border-indigo-600 hover:bg-indigo-50"
                  >
                    {dict.learn.readMore}
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{dict.learn.market.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">
                    {dict.learn.market.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="text-indigo-600 border-indigo-600 hover:bg-indigo-50"
                  >
                    {dict.learn.readMore}
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{dict.learn.strategies.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">
                    {dict.learn.strategies.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="text-indigo-600 border-indigo-600 hover:bg-indigo-50"
                  >
                    {dict.learn.readMore}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-indigo-200">
        <p className="text-xs text-indigo-600">
          © 2024 Global Partner & Resources Limited. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-indigo-600"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-indigo-600"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
