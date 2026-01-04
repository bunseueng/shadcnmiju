// @ts-nocheck
"use client";

import type React from "react";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const FormField3D = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({
      x: (x - 0.5) * 20,
      y: (y - 0.5) * 20,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
      form.reset();
      setIsSuccess(false);
    }, 2500);
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 md:px-0">
      <div className="w-full max-w-2xl space-y-8">
        {/* Form Card with 3D Effect */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="perspective"
          style={{
            perspective: "1200px",
          }}
        >
          <Card
            className="w-87.5 p-8 md:p-10 shadow-2xl overflow-hidden relative bg-card border"
            style={{
              transform: `perspective(1200px) rotateX(${
                mousePosition.y
              }deg) rotateY(${-mousePosition.x}deg) translateZ(20px)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Gradient background effect */}
            <div
              className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at center, rgb(59, 130, 246) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {isSuccess ? (
              <div className="relative z-10 flex flex-col items-center justify-center py-12 space-y-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-lg animate-bounce">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-foreground">
                    Message Sent!
                  </h2>
                  <p className="text-muted-foreground">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="relative z-10 space-y-6"
                >
                  {/* Full Name Field */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="h-11 rounded-lg border-2 border-border/50 bg-white/80 backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] focus:bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            type="email"
                            {...field}
                            className="h-11 rounded-lg border-2 border-border/50 bg-white/80 backdrop-blur-sm transition-all duration-300 focus:border-purple-500 focus:shadow-[0_0_20px_rgba(147,51,234,0.2)] focus:bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Subject Field */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="How can we help?"
                            {...field}
                            className="h-11 rounded-lg border-2 border-border/50 bg-white/80 backdrop-blur-sm transition-all duration-300 focus:border-pink-500 focus:shadow-[0_0_20px_rgba(236,72,153,0.2)] focus:bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-foreground">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your inquiry..."
                            {...field}
                            className="min-h-[120px] rounded-lg border-2 border-border/50 bg-white/80 backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] focus:bg-white resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="secondary"
                    className="w-full h-11 rounded-lg font-semibold text-base text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </Card>
        </div>
      </div>
    </main>
  );
};

export default FormField3D;
