import React from 'react';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    variable: '--font-roboto',
});

export const metadata: Metadata = {
    title: 'Nevada Kingi-Whata',
    description: 'Portfolio site of Nevada Kingi-Whata',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} min-w-80 min-h-svh h-svh`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
