"use client";

import { Box, Typography } from "@mui/material";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/ContactSection";
import { useState, useEffect } from "react";

/* TYPEWRITER COMPONENT (NO SOUND) */
function TypewriterHeader({
  text,
  speed = 100,
  delay = 5000,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;
    let repeatTimeout: NodeJS.Timeout;

    const startTyping = () => {
      setDisplayedText("");
      index = 0;

      typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;

        if (index >= text.length) {
          clearInterval(typingInterval);

          repeatTimeout = setTimeout(() => {
            startTyping();
          }, delay);
        }
      }, speed);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(repeatTimeout);
    };
  }, [text, speed, delay]);

  return (
   <Typography
  variant="h5" // smaller size
  sx={{
    fontWeight: 500, // less bold
    letterSpacing: 0.5, // tighter spacing
    textShadow: "1px 1px 4px rgba(0,0,0,0.2)", // lighter shadow
    fontFamily: "'Roboto Mono', monospace", // cleaner mono font
    whiteSpace: "pre",
    lineHeight: 1.3, // more compact
    fontSize: { xs: "1.5rem", md: "2rem" }, // responsive size
  }}
>
  {displayedText}
  <span className="cursor">|</span>

  <style jsx>{`
    .cursor {
      display: inline-block;
      width: 1ch;
      animation: blink 1s step-start infinite;
    }

    @keyframes blink {
      50% {
        opacity: 0;
      }
    }
  `}</style>
</Typography>
  );
}

export default function ContactPage() {
  return (
    <Box sx={{ fontFamily: "Inter, sans-serif" }}>
      {/* HEADER */}
      <Navbar />

      {/* HERO */}
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          textAlign: "center",
          background: "linear-gradient(135deg, #1e3a8a 0%, #E21B1B 100%)",
          color: "#fff",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 2,
            letterSpacing: 1,
            textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          Contact SCPSF
        </Typography>

        <TypewriterHeader
          text="SECOND CHANCE PRISONERS’ SUPPORT FOUNDATION (SCPSF)"
          speed={100}
          delay={5000}
        />
      </Box>

      {/* MAP + CONTACT LOCATION */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </Box>
  );
}
