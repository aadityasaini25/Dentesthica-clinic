import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dentesthica – Periodontist & Implantologist | GK-1, New Delhi",
  description: "Dentesthica by Major Dr. Vipin K. Sharma (BDS, MDS, FICD (USA), FPFA (USA), Graded Specialist AFMC) – Consultant Periodontist & Oral Implantologist with 15 years experience. World-class clinic ambience, latest advanced equipment. C-38, Lower Ground Floor, Greater Kailash-1, New Delhi.",
  keywords: "Dentesthica, Periodontist Delhi, Oral Implantologist Delhi, Dental Implants GK1, Major Dr Vipin K Sharma, Dental Clinic Greater Kailash, Gum Treatment Delhi, Implant Specialist New Delhi, AFMC Graded Specialist",
  authors: [{ name: "Major Dr. Vipin K. Sharma" }],
  creator: "Dentesthica",
  publisher: "Dentesthica",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.gk1dental.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dentesthica | Expert Periodontist & Implantologist in GK-1, Delhi",
    description: "Major Dr. Vipin K. Sharma (BDS, MDS, FICD (USA), FPFA (USA), Graded Specialist AFMC) – 15 Years Experience. C-38, Greater Kailash-1, New Delhi.",
    url: 'https://www.gk1dental.com/',
    siteName: "Dentesthica",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Dentesthica – Periodontist & Implantologist",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dentesthica – Periodontist & Implantologist",
    description: "Expert Periodontics & Dental Implants in Greater Kailash-1, New Delhi",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a3a5c" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
