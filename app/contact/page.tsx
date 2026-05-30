"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "aguricano@gmail.com",
    link: "mailto:aguricano@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/AguriCano",
    link: "https://github.com/AguriCano",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/aguri-cano-b3ba68142",
    link: "https://www.linkedin.com/in/aguri-cano-b3ba68142/",
    color: "from-blue-600 to-blue-800",
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Error:", result.error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-[var(--color-gray-light)] text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Columna izquierda - Formulario */}
          <div>
            <Card>
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>

              {status === "success" && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-green-500">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                  <span className="text-red-500">
                    ❌ Failed to send message. Please try again or contact me
                    directly via email.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Campo Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-3 bg-[var(--color-dark)] border ${
                      errors.name
                        ? "border-red-500"
                        : "border-[var(--color-dark-border)]"
                    } rounded-xl focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Campo Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-3 bg-[var(--color-dark)] border ${
                      errors.email
                        ? "border-red-500"
                        : "border-[var(--color-dark-border)]"
                    } rounded-xl focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
                    placeholder="your@email.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Campo Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 bg-[var(--color-dark)] border ${
                      errors.message
                        ? "border-red-500"
                        : "border-[var(--color-dark-border)]"
                    } rounded-xl focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none`}
                    placeholder="Tell me about your project..."
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Botón enviar */}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full justify-center"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Columna derecha - Información de contacto */}
          <div className="space-y-6">
            <Card>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-[var(--color-gray-light)] mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center">
                    <MapPin size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-[var(--color-gray-light)] text-sm">
                      Remote / Available worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center">
                    <Phone size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-[var(--color-gray-light)] text-sm">
                      +51 967 157 459
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold mb-6">Connect with me</h2>
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <Link
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    className="flex items-center justify-between p-4 bg-[var(--color-dark)] border border-[var(--color-dark-border)] rounded-xl hover:border-[var(--color-primary)]/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center`}
                      >
                        <info.icon size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <p className="text-[var(--color-gray-light)] text-sm">
                          {info.value}
                        </p>
                      </div>
                    </div>
                    <div className="text-[var(--color-gray-light)] group-hover:text-[var(--color-primary)] transition-colors">
                      →
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Horario de respuesta */}
            <div className="text-center p-4 bg-[var(--color-primary)]/5 rounded-xl border border-[var(--color-primary)]/10">
              <p className="text-sm text-[var(--color-gray-light)]">
                ⚡ Usually responds within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
