import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";

export const metadata = {
  metadataBase: new URL("https://lewischege.site"),
  title: {
    default: "Lewis Chege — Software Developer",
    template: "%s | Lewis Chege",
  },
  description:
    "Lewis Chege is a software developer based in Nairobi, building elegant, high-performance web applications.",
  openGraph: {
    title: "Lewis Chege — Software Developer",
    description:
      "Software developer building elegant, high-performance web applications.",
    url: "https://lewischege.site",
    siteName: "Lewis Chege Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewis Chege — Software Developer",
    description:
      "Software developer building elegant, high-performance web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          {children}
          <Toaster />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
