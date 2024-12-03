"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  dict: {
    contact: {
      form: {
        name: string;
        email: string;
        message: string;
        submit: string;
        success: string;
        error: string;
      };
    };
  };
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Move the async functionality into a separate function
  const submitForm = async (formData: any) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      return { ok: response.ok, data };
    } catch (error) {
      throw error;
    }
  };

  // Make the handler non-async
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitForm(formData)
      .then(({ ok, data }) => {
        if (ok) {
          alert(dict.contact.form.success || "Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          console.error("Server error:", data);
          alert(`${dict.contact.form.error} (${data.error || data.message})`);
        }
      })
      .catch((error) => {
        console.error("Client error:", error);
        alert(dict.contact.form.error);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={dict.contact.form.name}
        required
      />
      <Input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={dict.contact.form.email}
        required
      />
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder={dict.contact.form.message}
        required
      />
      <Button
        type="submit"
        className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
      >
        {dict.contact.form.submit}
      </Button>
    </form>
  );
}