import type { Metadata } from "next";
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import "./globals.css";



const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-poppins', // Assigns a CSS variable for easy use
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "GentlemanDev | Portfolio",
  description: "Salihu Adamu portfolio website | A software developer",
  keywords: [
    "GentlemanDev",
    "Salihu Adamu",
    "Software Developer",
    "Tech Enthusiast",
    "Nigerian Developer",
    "Nigerian Software Engineer",
    "Nigerian Founder",
    "Founder of ZexSend",
    "Salihu Adamu Portfolio",
    "Salihu Adamu Portfolio Website",
    "Salihu Adamu Software Developer",
    "Salihu Adamu Software Engineer",
    "Salihu Adamu Nupe",
    "FarmLook founder",
    "FarmLook founder Salihu Adamu",
    "Zexsend founder"
  ],
  icons: {
    icon: "/favicon.png"
  },
  authors: [
    { name: 'Salihu Adamu', url: 'https://gentlemandev.vercel.app' }
  ],
  creator: 'Salihu Adamu',
  publisher: 'GentlemanDev"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
         <link rel="icon" href="/favicon.png" />
       </Head>
      <body
        className={`${poppins.variable} bg-[#101720] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
