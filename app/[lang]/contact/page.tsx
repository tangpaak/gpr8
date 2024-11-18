"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { getDictionary } from "../../lib/dictionary";
import { useState } from 'react';
import ContactForm from '@/components/ContactForm';

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);


  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-indigo-200">
        <Link className="flex items-center justify-center" href="/"></Link>
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
            href="/faqs"
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
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/3">
                <Image
                  src="/images/CustomerService.png"
                  alt="Customer Service Representative"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full"
                  priority
                />
              </div>
              <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
                  {dict.contact.title}
                </h1>
                <p className="max-w-[700px] text-indigo-200 md:text-xl">
                  {dict.contact.subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>{dict.contact.info.title}</CardTitle>
                  <CardDescription>
                    {dict.contact.info.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="text-indigo-600" />
                    <span>{dict.contact.info.phone}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-indigo-600" />
                    <span>{dict.contact.info.email}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-indigo-600" />
                    <span>{dict.contact.info.address}</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{dict.contact.form.title}</CardTitle>
                  <CardDescription>
                    {dict.contact.form.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                <ContactForm dict={dict} />
                </CardContent>
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
