import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  AppContextProvider from "./context/AppContext";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Navbar from "./components/student/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Learnify",
  description: "Explore, compare, and choose the right course.",
};

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
if (!publishableKey) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={publishableKey} afterSignOutUrl="/">
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppContextProvider>
          {/* <Navbar/> */}
        {children}
        </AppContextProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
