import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ['latin'],
	weight: ["400", "500", "600", "700"]
});

const jetBrainMono = Poppins({
	variable: "--font-mono",
    subsets: ['latin'],
    weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
    metadataBase: new URL("https://greengutzai.github.io"),
    title: "Axel Mah - Portfolio",
    description: "",
    keywords: [],
    authors: [{ name: "Axel Mah" }],
    creator: "Axel Mah",
    publisher: "Axel Mah",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
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
        title: "Axel Mah Portfolio",
        description: "",
        url: "https://greengutzai.github.io",
        siteName: "Axel Mah Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/portfolio_hero_section.png",
                width: 1200,
                height: 630,
                alt: "Axel Mah Portfolio Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Axel Mah",
        description: "",
        images: ["/portfolio_hero_section.png"],
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${jetBrainMono.variable} antialiased`}>
                {children}
            </body>
        </html>
  );
}