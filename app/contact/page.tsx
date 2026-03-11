"use client";

import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState, useEffect } from "react";

// Typewriter sound file
const typingSound = "/type-writter-sound-effect/freesound_community-typewriter-machine-64191.mp3";

// Typewriter component with loop every 5 seconds
function TypewriterHeader({ text, speed = 100, delay = 5000 }: { text: string; speed?: number; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio(typingSound) : null);

  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;
    let repeatTimeout: NodeJS.Timeout;

    const startTyping = () => {
      setDisplayedText("");
      index = 0;

      typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));

        // Play typing sound
        if (audio) {
          audio.currentTime = 0;
          audio.play().catch(() => {});
        }

        index++;
        if (index >= text.length) {
          clearInterval(typingInterval);

          // Repeat typing after delay
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
  }, [text, speed, delay, audio]);

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
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with gradient background */}
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

        {/* Typewriter Animated Organization Name */}
        <TypewriterHeader
          text="SECOND CHANCE PRISONERS’ SUPPORT FOUNDATION (SCPSF)"
          speed={100}
          delay={5000} // repeat every 5 seconds
        />
      </Box>

      {/* Main Content: Info + Form */}
      <Box sx={{ py: { xs: 6, md: 12 }, px: { xs: 3, md: 10 } }}>
        <Grid container spacing={8} alignItems="flex-start">
          {/* Left: Contact Info Card */}
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
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                Get in Touch
              </Typography>

              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Address:</strong> P.O.BOX 8847 Moshi, Plot No.44, Ndetembea Road, Karume Street, Longuo A ward
              </Typography>

              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Region of Operation:</strong> Northern Zone (Kilimanjaro, Tanga, Arusha, Manyara)
              </Typography>

              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Phone:</strong> 0621 197454
              </Typography>

              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Email:</strong> marymaliga73@gmail.com
              </Typography>

              <Typography variant="body2" sx={{ mt: 3, color: "#555" }}>
                SCPSF is a non-profit organization assisting prisoners without automatic government legal aid. Contact us for support, education, or reintegration programs.
              </Typography>
            </Paper>
          </Grid>

          {/* Right: Contact Form Card */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={8}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                background: "#fff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": { transform: "translateY(-5px)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" },
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
                Send Us a Message
              </Typography>

              <Box component="form">
                <TextField fullWidth label="Full Name" variant="outlined" sx={{ mb: 3 }} />
                <TextField fullWidth label="Email Address" type="email" variant="outlined" sx={{ mb: 3 }} />
                <TextField fullWidth label="Subject" variant="outlined" sx={{ mb: 3 }} />
                <TextField fullWidth label="Message" multiline rows={6} variant="outlined" sx={{ mb: 3 }} />

                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(90deg, #1e3a8a, #E21B1B)",
                    color: "#fff",
                    px: 5,
                    py: 1.5,
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(90deg, #16326d, #b31515)",
                    },
                  }}
                  type="submit"
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}