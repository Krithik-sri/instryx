import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://instryx.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Instryx \u2014 Agent Evaluation & Observability for AI Teams",
  description: "Instryx evaluates AI agents across 100+ dimensions, traces every step, and pinpoints why an agent failed \u2014 so teams catch regressions before customers do.",
  applicationName: "Instryx",
  authors: [{ name: "Instryx" }],
  creator: "Instryx",
  publisher: "Instryx",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Instryx",
    title: "Instryx \u2014 Ship AI agents you can trust",
    description: "Continuous evals, full trace timelines, and automatic failure-mode diagnosis for AI agents. Catch regressions before customers do.",
    images: ["/og.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instryx \u2014 Ship AI agents you can trust",
    description: "Continuous evals, full trace timelines, and automatic failure-mode diagnosis for AI agents. Catch regressions before customers do.",
    images: ["/og.png"],
  },
  icons: { icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230a0e14'/%3E%3Ccircle cx='16' cy='16' r='9' fill='none' stroke='%232dd4bf' stroke-width='2.5'/%3E%3Ccircle cx='16' cy='16' r='3' fill='%2334d399'/%3E%3C/svg%3E" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
