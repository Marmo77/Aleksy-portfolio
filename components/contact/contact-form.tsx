"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(1, "Your name is required"),
  email: z.email("Enter a valid email address"),
  message: z.string().min(1, "Tell me what you're hiring for"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Please accept the privacy policy to continue",
  }),
});

type ContactValues = z.infer<typeof contactSchema>;

function submitViaMailto(values: ContactValues) {
  const subject = encodeURIComponent(`Portfolio contact from ${values.name}`);
  const body = encodeURIComponent(
    `${values.message}\n\n— ${values.name} (${values.email})`,
  );
  window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", consent: false },
  });

  function onSubmit(values: ContactValues) {
    submitViaMailto(values);
    setSubmitted(true);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col h-full"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-mono text-[11.5px] tracking-[0.06em] text-text-dim uppercase">
                  Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-mono text-[11.5px] tracking-[0.06em] text-text-dim uppercase">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel className="font-mono text-[11.5px] tracking-[0.06em] text-text-dim uppercase">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder={site.contact.form.messagePlaceholder}
                  {...field}
                  className="min-h-[80px] max-h-[175px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="mt-5">
              <div className="flex items-center gap-2.5">
                <FormControl>
                  <Checkbox
                    id="acceptPrivacy"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <label
                  htmlFor="acceptPrivacy"
                  className="text-xs leading-snug text-text-dim"
                >
                  {site.contact.form.consentLabel}{" "}
                  <Link
                    href={site.contact.form.privacyUrl}
                    className="text-mint hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="cta"
          className="mt-6 w-full justify-center sm:w-auto"
        >
          {site.contact.form.submitLabel}
          <Send size={14} strokeWidth={2.5} />
        </Button>

        {submitted && (
          <p className="mt-4 flex items-center gap-2 text-sm text-mint">
            <CheckCircle2 size={16} strokeWidth={2.5} />
            {site.contact.form.successNote}
          </p>
        )}
      </form>
    </Form>
  );
}
