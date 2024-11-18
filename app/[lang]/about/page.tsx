'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getDictionary } from "../../lib/dictionary";

export default async function AboutPage({
  params: { lang }
}: {
  params: { lang: string }
}) { const dict = await getDictionary(lang);
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-900 text-white">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 text-center">
              {dict.about.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-indigo-200 md:text-xl text-center">
              {dict.about.subtitle}
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>{dict.about.history.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-indigo-600">
                  {dict.about.history.content}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{dict.about.mission.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-indigo-600">
                    {dict.about.mission.content}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-900">
              {dict.about.values.title}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>{dict.about.values.integrity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">
                    {dict.about.values.integrity.content}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{dict.about.values.excellence.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">
                    {dict.about.values.excellence.content}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{dict.about.values.innovation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">
                    {dict.about.values.innovation.content}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-indigo-200">
        <p className="text-xs text-indigo-600">© 2024 Global Partner & Resources Limited. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-indigo-600" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-indigo-600" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}