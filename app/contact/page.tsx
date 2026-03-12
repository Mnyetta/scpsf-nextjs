"use client";

import { Box, Typography, Grid, Paper } from "@mui/material";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/ContactSection";
import { useState, useEffect } from "react";

/* TYPEWRITER COMPONENT (WITHOUT SOUND) */
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
      variant="h3"
      sx={{
        fontWeight: 800,
        letterSpacing: 1,
        textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
        fontFamily: "Courier New, monospace",
        whiteSpace: "pre",
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

      {/* CONTACT INFO */}
      <Box sx={{ py: { xs: 6, md: 12 }, px: { xs: 3, md: 10 } }}>
        <Grid container spacing={8} alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <Paper
              elevation={8}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                background: "linear-gradient(145deg, #f6f8fb, #e3eaf2)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <Typography sx={{ mb: 1 }}>
                <strong>Address:</strong> P.O.BOX 8847 Moshi, Plot No.44,
                Ndetembea Road, Karume Street, Longuo A ward
              </Typography>

              <Typography sx={{ mb: 1 }}>
                <strong>Region:</strong> Northern Zone (Kilimanjaro, Tanga,
                Arusha, Manyara)
              </Typography>

              <Typography sx={{ mb: 1 }}>
                <strong>Phone:</strong> 0621 197454
              </Typography>

              <Typography sx={{ mb: 1 }}>
                <strong>Email:</strong> marymaliga73@gmail.com
              </Typography>

              <Typography variant="body2" sx={{ mt: 3, color: "#555" }}>
                SCPSF is a non-profit organization assisting prisoners without
                automatic government legal aid. Contact us for support,
                education, or reintegration programs.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* MAP + EXTRA CONTACT INFO */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </Box>
  );
}
