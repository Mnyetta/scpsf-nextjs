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
    <AppBar position="sticky" className="navbarAppBar">
      <Toolbar className="toolbar">
        {/* LEFT SIDE: Logo + Title */}
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
            </div>
          </Link>
          <h2 className={`siteTitle ${waveReady ? "wave" : ""}`}>{title}</h2>
        </Box>

        {/* NAVIGATION LINKS */}
        <ul className="nav">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href} className={pathname === link.href ? "activeLink" : ""}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Toolbar>

      {/* INLINE STYLE */}
      <style jsx>{`
        .navbarAppBar {
          background: linear-gradient(135deg,#020617,#0f172a,#020617);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(56,189,248,0.2);
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
        }

        .toolbar {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 2rem;
        }

        .leftSide {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logoBorder {
          border-radius: 50%;
          border: 2px solid #000;
          object-fit: cover;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .logoBorder:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        }

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

        .nav {
          display: flex;
          gap: 1rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav li a {
          display: block;
          padding: 0.75rem 1.25rem;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          transition: background 0.3s, color 0.3s, transform 0.2s;
        }

        .nav li a:hover {
          background: #38bdf8;
          color: #020617;
          transform: translateY(-2px);
        }

        .activeLink {
          color: #38bdf8;
          font-weight: 700;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .toolbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          .nav {
            flex-direction: column;
            width: 100%;
          }
          .nav li a {
            width: 100%;
            text-align: center;
          }
          .siteTitle {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </AppBar>
  );
}
