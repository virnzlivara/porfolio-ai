import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import CursorGlow from "@/components/CursorGlow";
import ScrollToTop from "@/components/ScrollToTop";
import MessengerChat from "@/components/MessengerChat";

export const metadata: Metadata = {
  title: "Virna Rizza Cabaguing | Senior Frontend Engineer",
  description:
    "Senior Front-End Engineer with 10+ years of experience building scalable web and mobile applications across banking, telco, ERP, insurance, and enterprise platforms.",
  keywords: [
    "Frontend Engineer",
    "React",
    "NextJS",
    "TypeScript",
    "Angular",
    "Vue",
    "Philippines",
  ],
  authors: [{ name: "Virna Rizza Cabaguing" }],
  openGraph: {
    title: "Virna Rizza Cabaguing | Senior Frontend Engineer",
    description: "10+ years building scalable web & mobile apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-space-dark text-white font-body antialiased overflow-x-hidden">
        <StarField />
        <CursorGlow />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop /> 
        <MessengerChat />
      </body>
      
    </html>
  );
}
