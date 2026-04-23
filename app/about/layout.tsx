import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PERAMIHO Events and Designing — a Tanzanian-owned event production company founded in 2011. Discover our vision, mission, core values, and commitment to excellence.",
  alternates: {
    canonical: "https://www.peramihoevents.co.tz/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
