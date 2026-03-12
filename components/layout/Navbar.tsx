"use client";

import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [lawyerMenuOpen, setLawyerMenuOpen] = useState(false);
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
    { label: "Lawyers", href: "/lawyers", dropdown: [] },
    { label: "About Us", href: "/about-us" },
    { label: "Donate", href: "/donate" },
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

          {/* SINGLE TITLE */}
          <Box sx={{ ml: 3 }}>
            <h2 className={`siteTitle ${waveReady ? "wave" : ""}`}>{title}</h2>
          </Box>
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

      <style jsx>{`
        .siteTitle {
          color: #38bdf8;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .wave {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </AppBar>
  );
}
