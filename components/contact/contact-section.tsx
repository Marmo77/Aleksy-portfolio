"use client";

import { useSite } from "@/components/i18n/site-provider";
import { Reveal } from "@/components/shared/reveal";
import { Surface } from "@/components/shared/surface";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactRow } from "@/components/contact/contact-row";

export function ContactSection() {
  const site = useSite();
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="mb-14">
          <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
            {site.contact.sectionLabel}
          </span>
          <h2 className="font-display mt-3 text-[32px] font-bold sm:text-[38px]">
            {site.contact.heading}
          </h2>
          <p className="mt-4 max-w-[560px] text-text-muted">
            {site.contact.subheading}
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Surface className="p-8 h-full sm:p-10">
              <ContactForm />
            </Surface>
          </Reveal>

          <Reveal delay={0.08}>
            <Surface className="p-8 sm:p-10 h-full">
              <h3 className="font-display text-xl font-semibold">
                {site.ui.contactForm.otherWays}
              </h3>
              <div className="mt-2 flex flex-col">
                {site.contact.rows.map((row, i) => (
                  <ContactRow
                    key={row.label}
                    row={row}
                    isLast={i === site.contact.rows.length - 1}
                  />
                ))}
              </div>
            </Surface>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
