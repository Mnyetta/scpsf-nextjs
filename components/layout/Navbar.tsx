"use client";

import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [lawyerMenuOpen, setLawyerMenuOpen] = useState(false);

  /* START WAVE AFTER LOADER */
  const [waveReady, setWaveReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWaveReady(true);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  const title = "(SCPSF)";

  const navLinks = [
    { label: "Home", href: "/" },

    {
      label: "Lawyers",
      href: "/lawyers",
      dropdown: [],
    },

    { label: "About Us", href: "/about-us" },

    { label: "Donate", href: "/donate" },

    /* NEW CONTACT PAGE */
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(135deg,#020617,#0f172a,#020617)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(56,189,248,0.2)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
      }}
    >
      <Box className="navbar-loader-line" />

      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/" className="logoContainer">
            <div className="logoWrapper">
              <Image
                src="/logo/logo.jpg"
                alt="SCPSF Logo"
                width={68}
                height={68}
                className="logoGlow"
              />
              <span className="logoScan"></span>
            </div>
          </Link>

          {/* WAVE TITLE */}
          <div className={`waveTitle ${waveReady ? "startWave" : ""}`}>
            <h2>{title}</h2>
            <h2>{title}</h2>
          </div>
        </Box>

        {/* NAVIGATION */}
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          {navLinks.map((link, idx) => (
            <Box
              key={idx}
              sx={{ position: "relative" }}
              onMouseEnter={() => link.dropdown && setLawyerMenuOpen(true)}
              onMouseLeave={() => link.dropdown && setLawyerMenuOpen(false)}
            >
              <Button
                component={Link}
                href={link.href}
                className="navButton"
                sx={{
                  color: pathname === link.href ? "#38bdf8" : "#fff",
                  fontWeight: pathname === link.href ? "bold" : "normal",
                }}
              >
                {link.label}
              </Button>

              {link.dropdown && lawyerMenuOpen && link.dropdown.length > 0 && (
                <Box className="dropdownMenu">
                  {link.dropdown.map((item, i) => (
                    <Button
                      key={i}
                      component={Link}
                      href={item.href}
                      className="dropdownItem"
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Toolbar>

      {/* CSS remains unchanged */}
      <style jsx>{`
      /* YOUR ORIGINAL CSS (UNCHANGED) */
      `}</style>
    </AppBar>
  );
}
