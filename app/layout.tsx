import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.peramihoevents.co.tz"),
  title: {
    default: "PERAMIHO Events and Designing | Professional Event Production Tanzania",
    template: "%s | PERAMIHO Events and Designing",
  },
  description:
    "PERAMIHO Events and Designing offers professional event production, sound systems, staging, lighting, LED screens, tents, branding, videography, catering and equipment rental in Dar es Salaam, Tanzania. Trusted since 2011.",
  keywords: [
    "event production Tanzania",
    "event equipment rental Dar es Salaam",
    "sound systems Tanzania",
    "stage lighting rental",
    "LED screens Tanzania",
    "event tents Dar es Salaam",
    "wedding event services Tanzania",
    "corporate event production",
    "event videography Tanzania",
    "PERAMIHO Events",
  ],
  authors: [{ name: "PERAMIHO Events and Designing" }],
  creator: "PERAMIHO Events and Designing",
  publisher: "PERAMIHO Events and Designing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: "https://www.peramihoevents.co.tz",
    siteName: "PERAMIHO Events and Designing",
    title: "PERAMIHO Events and Designing | Professional Event Production Tanzania",
    description:
      "Professional event production and equipment rental in Dar es Salaam since 2011. Sound, lighting, staging, LED screens, tents, branding & more.",
    images: [
      {
        url: "/Hero.jpg",
        width: 1200,
        height: 630,
        alt: "PERAMIHO Events and Designing - Premium Event Solutions in Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PERAMIHO Events and Designing | Professional Event Production Tanzania",
    description:
      "Professional event production and equipment rental in Dar es Salaam since 2011.",
    images: ["/Hero.jpg"],
  },
  icons: {
    icon: "/peramiho favicon.png",
    shortcut: "/peramiho favicon.png",
    apple: "/peramiho favicon.png",
  },
  alternates: {
    canonical: "https://www.peramihoevents.co.tz",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PERAMIHO Events and Designing",
              image: "https://www.peramihoevents.co.tz/Peramiho%20Events%20logo.png",
              url: "https://www.peramihoevents.co.tz",
              telephone: "+255769940569",
              email: "peramihoevents@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Chang'ombe Maduka Mawili",
                addressLocality: "Dar es Salaam",
                addressCountry: "TZ",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.85,
                longitude: 39.2675,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "20:00",
                },
              ],
              priceRange: "$$",
              areaServed: {
                "@type": "Country",
                name: "Tanzania",
              },
              foundingDate: "2011",
              sameAs: [
                "https://www.instagram.com/peramiho_events/",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
