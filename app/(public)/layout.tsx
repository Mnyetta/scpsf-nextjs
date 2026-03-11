"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import MuiThemeProvider from "../../components/ui/MuiThemeProvider";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider>
      <Navbar />
      {/* Main container with consistent 60px side padding */}
      <main className="min-h-screen bg-gray-50 container-tight">
        {children}
      </main>
      <Footer />
    </MuiThemeProvider>
  );
}