"use client";

interface ContactFormProps {
  dict: {
    contact: {
      form: {
        name: string;
        email: string;
        message: string;
        submit: string;
      };
    };
  };
}

export default function ContactForm({ dict }: ContactFormProps) {
  // Your existing ContactForm code
}