import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PERAMIHO Events and Designing. Request a quote for your next event in Dar es Salaam, Tanzania. Call +255 769 940 569 or send us a message.",
  alternates: {
    canonical: "https://www.peramihoevents.co.tz/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
