import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Andrew Rosenfeld | Portfolio & Writing',
  description: 'Music educator, prompt engineer, and creative strategist.',
  openGraph: {
    title: 'Andrew Rosenfeld | Portfolio & Writing',
    description: 'Teach the Machine – Teach the Student: essays, projects, and resources.',
    images: ['/og.png']
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body><Nav />{children}<Footer /></body></html>
  );
}
