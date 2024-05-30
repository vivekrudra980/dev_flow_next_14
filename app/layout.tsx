import React from "react";

/** <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> 
          
          SignInButton,
  SignedIn,
  SignedOut,
  UserButton, */

import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metaData: Metadata = {
  title: "Dev Flow",
  description:
    "A community driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web developement, mobile app development, and more. Explore topics in web developement, mobile app development, and mobile development, alogorithms, data structures, and more.",
  icons: {
    icon: "assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
