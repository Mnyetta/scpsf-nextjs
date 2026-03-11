"use client"; // Mark as client

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import MuiThemeProvider from "../../components/ui/MuiThemeProvider";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider>
      <Navbar />
      <main className="min-h-screen bg-gray-50">{children}</main>
      <Footer />
    </MuiThemeProvider>
  );
}