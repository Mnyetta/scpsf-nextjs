"use client";

import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "@/styles/globals.css"; // make sure this path points to your global.css

export default function Navbar() {
  const pathname = usePathname();
  const [lawyerMenuOpen, setLawyerMenuOpen] = useState(false);
  const [waveReady, setWaveReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setWaveReady(true), 4200);
    return () => clearTimeout(timer);
  }, []);

  const title = "(SCPSF)";
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Lawyers", href: "/lawyers", dropdown: [] },
    { label: "About Us", href: "/about-us" },
    { label: "Donate", href: "/donate" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      className="navbarAppBar"
      sx={{
        background: "linear-gradient(135deg,#020617,#0f172a,#020617)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(56,189,248,0.2)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
      }}
    >
      <Box className="navbar-loader-line" />

      <Toolbar className="toolbar">
        {/* LEFT SIDE */}
        <Box className="leftSide">
          <Link href="/" className="logoContainer">
            <div className="logoWrapper">
              <Image
                src="/logo/logo.jpg"
                alt="SCPSF Logo"
                width={68}
                height={68}
                className="logoGlow logoBorder"
              />
              <span className="logoScan"></span>
            </div>
          </Link>

          {/* TITLE */}
          <Box className="titleBox">
            <h2 className={`siteTitle ${waveReady ? "wave" : ""}`}>{title}</h2>
          </Box>
        </Box>

        {/* NAVIGATION */}
        <ul className="nav">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </Toolbar>
    </AppBar>
  );
}
