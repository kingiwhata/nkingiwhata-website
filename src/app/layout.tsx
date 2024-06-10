import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import Nav from './components/Nav';
import './globals.css';

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
            <body
                className={`${roboto.variable} flex flex-col min-w-80 h-screen overflow-hidden`}
            >
                {children}
            </body>
        </html>
    );
}
