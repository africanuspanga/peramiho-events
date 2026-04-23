import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive event services: sound systems, staging & lighting, tents, LED screens, branding, videography, catering, and equipment rental in Dar es Salaam, Tanzania.",
  alternates: {
    canonical: "https://www.peramihoevents.co.tz/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
