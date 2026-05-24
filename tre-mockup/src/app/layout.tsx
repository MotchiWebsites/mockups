import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tre Restaurant | Vietnamese Heritage Kitchen",
    description:
        "Tre is a Vietnamese restaurant in Toronto, Ontario. We serve refined dishes designed for slow, shared moments, in a kitchen and bar experience built for nights out.",
    appleWebApp: {
        title: "Tre",
    },
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_BASE_URL &&
            (process.env.NEXT_PUBLIC_BASE_URL.startsWith("http")
                ? process.env.NEXT_PUBLIC_BASE_URL
                : `https://${process.env.NEXT_PUBLIC_BASE_URL}`)
            || "http://localhost:3000"
    ),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
