import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How contact form submissions are used on this site.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="pt-[150px] pb-28">
      <div className="mx-auto max-w-[720px] px-6">
        <Button asChild variant="text" className="mb-6 text-sm text-text-muted">
          <Link href="/#contact">
            <ArrowLeft size={13} strokeWidth={2.5} />
            Back to contact
          </Link>
        </Button>

        <span className="font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
          Privacy
        </span>
        <h1 className="font-display mt-3 text-[32px] font-bold sm:text-[38px]">
          Privacy policy
        </h1>
        <p className="mt-5 leading-relaxed text-text-muted">
          This is a personal portfolio, not a company, so this policy is short on purpose.
        </p>

        <div className="mt-10 flex flex-col gap-8">
          <div>
            <h2 className="font-display text-lg font-semibold">What gets collected</h2>
            <p className="mt-2 leading-relaxed text-text-muted">
              The contact form only asks for your name, email address, and message. Nothing
              else is tracked, stored, or logged when you use it.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">How it&apos;s used</h2>
            <p className="mt-2 leading-relaxed text-text-muted">
              Submitting the form opens your own email client with a pre-filled message
              addressed to {site.contact.email}. The message only reaches me once you send it
              yourself — nothing is transmitted to a server or third party in between.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">No sharing, no spam</h2>
            <p className="mt-2 leading-relaxed text-text-muted">
              Your details are never sold, shared, or added to a mailing list. They&apos;re
              used only to reply to you.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold">Questions</h2>
            <p className="mt-2 leading-relaxed text-text-muted">
              Reach out any time at{" "}
              <a href={`mailto:${site.contact.email}`} className="text-mint hover:underline">
                {site.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
