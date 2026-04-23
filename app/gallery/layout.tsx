import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the PERAMIHO Events and Designing gallery. See our past events, weddings, corporate functions, concerts, and stage setups across Tanzania.",
  alternates: {
    canonical: "https://www.peramihoevents.co.tz/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
