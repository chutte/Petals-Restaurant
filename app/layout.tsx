import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Petals Restaurant - Breakfast, Brunch & Fresh Flowers | Ahangama, Sri Lanka",
  description:
    "Experience beauty, flavor, and comfort at Petals Restaurant in Ahangama. Enjoy exquisite breakfast, delightful brunch, fresh flowers, and cozy guest rooms. Order now on Uber Eats!",
  keywords:
    "Petals Restaurant, Ahangama restaurant, breakfast, brunch, fresh flowers, guest rooms, Sri Lanka dining, Uber Eats",
  authors: [{ name: "Petals Restaurant" }],
  creator: "Petals Restaurant",
  publisher: "Petals Restaurant",
  robots: "index, follow",
  openGraph: {
    title: "Petals Restaurant - Beauty, Flavor & Comfort",
    description:
      "We bring beauty, flavor, and comfort to your day. Experience our exquisite breakfast, delightful brunch, fresh flowers, and cozy guest rooms.",
    url: "https://petalsrestaurant.com",
    siteName: "Petals Restaurant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Petals Restaurant - Beautiful dining experience with flowers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petals Restaurant - Beauty, Flavor & Comfort",
    description:
      "Experience our exquisite breakfast, delightful brunch, fresh flowers, and cozy guest rooms in Ahangama, Sri Lanka.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#912914",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
