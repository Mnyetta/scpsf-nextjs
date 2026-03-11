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

  const title = "SECOND CHANCE PRISONERS' SUPPORT FOUNDATION (SCPSF)";

  const navLinks = [
    { label: "Home", href: "/" },
   
    {
      label: "Lawyers",
      href: "/lawyers",
      dropdown: [], // empty dropdown (login/register removed)
    },
    { label: "About Us", href: "/about-us" }, // updated to point to about-us page
    { label: "Donate", href: "/donate" },
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

              {/* Render dropdown only if it has items */}
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
        /* loader line */
        .navbar-loader-line {
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            #38bdf8,
            #06b6d4,
            #38bdf8,
            transparent
          );
          background-size: 300% 100%;
          animation: loaderMove 4s linear infinite;
        }

        @keyframes loaderMove {
          0% {
            background-position: -300px;
          }
          100% {
            background-position: 300px;
          }
        }

        /* logo */
        .logoGlow {
          border-radius: 50%;
          box-shadow: 0 0 20px #38bdf8, 0 0 40px #38bdf8;
          transition: all 0.3s ease;
        }

        .logoGlow:hover {
          transform: scale(1.25);
          box-shadow: 0 0 40px #38bdf8, 0 0 80px #38bdf8;
        }

        /* wave title */
        .waveTitle {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-left: 60px;
        }

        .waveTitle h2 {
          position: absolute;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .waveTitle h2:nth-child(1) {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.9);
        }

        .waveTitle h2:nth-child(2) {
          color: #38bdf8;
          clip-path: polygon(
            0 42%,
            13% 48%,
            26% 55%,
            41% 64%,
            56% 65%,
            69% 58%,
            84% 45%,
            100% 38%,
            100% 100%,
            0% 100%
          );
        }

        .startWave h2:nth-child(2) {
          animation: wave 4s ease-in-out infinite;
        }

        @keyframes wave {
          0%,
          100% {
            clip-path: polygon(
              0 42%,
              13% 48%,
              26% 55%,
              41% 64%,
              56% 65%,
              69% 58%,
              84% 45%,
              100% 38%,
              100% 100%,
              0% 100%
            );
          }

          50% {
            clip-path: polygon(
              0 63%,
              14% 57%,
              25% 50%,
              40% 42%,
              56% 40%,
              71% 44%,
              84% 50%,
              100% 60%,
              100% 100%,
              0% 100%
            );
          }
        }

        /* nav buttons */
        .navButton {
          transition: all 0.3s ease;
        }

        .navButton:hover {
          color: #38bdf8;
          text-shadow: 0 0 10px #38bdf8;
        }

        /* dropdown */
        .dropdownMenu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #020617;
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          min-width: 180px;
          animation: dropdownSlide 0.25s ease-out;
        }

        .dropdownItem {
          color: white;
          justify-content: flex-start;
          padding: 10px 16px;
        }

        .dropdownItem:hover {
          background: #38bdf8;
          color: black;
        }

        @keyframes dropdownSlide {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* logo container */
        .logoContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
        }

        .logoWrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          overflow: hidden;
        }

        .logoGlow {
          width: 68px;
          height: 68px;
          border-radius: 100%;
          object-fit: cover;
          box-shadow: 0 0 18px #38bdf8, 0 0 45px rgba(56, 189, 248, 0.6);
          transition: all 0.35s ease;
          animation: logoFloat 4s ease-in-out infinite, logoPulse 3s ease-in-out infinite;
        }

        .logoContainer:hover .logoGlow {
          transform: scale(0.9) rotate(-2deg);
          box-shadow: 0 0 25px #38bdf8, 0 0 60px rgba(56, 189, 248, 0.8);
        }

        .logoScan {
          position: absolute;
          top: -120%;
          left: -50%;
          width: 200%;
          height: 250%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.6), transparent);
          transform: rotate(25deg);
          animation: scanLogo 4s linear infinite;
          pointer-events: none;
        }

        @keyframes scanLogo {
          0% {
            top: -120%;
          }
          100% {
            top: 120%;
          }
        }

        @keyframes logoFloat {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes logoPulse {
          0% {
            box-shadow: 0 0 15px #38bdf8, 0 0 40px rgba(56, 189, 248, 0.5);
          }
          50% {
            box-shadow: 0 0 30px #38bdf8, 0 0 70px rgba(56, 189, 248, 0.9);
          }
          100% {
            box-shadow: 0 0 15px #38bdf8, 0 0 40px rgba(56, 189, 248, 0.5);
          }
        }
      `}</style>
    </AppBar>
  );
}