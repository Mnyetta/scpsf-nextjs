"use client";

import { Box, Typography, IconButton, keyframes, Container, Grid } from "@mui/material";
import Image from "next/image";

// Subtle luxury float animation (less aggressive than bounce)
const softFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

const socialMedias = [
  {
    name: "WhatsApp",
    link: "https://wa.me/your-number",
    image: "/social-medias/whatapp.jfif",
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@yourprofile",
    image: "/social-medias/tiktok.jfif",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/yourpage",
    image: "/social-medias/facebook.jfif",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/yourprofile",
    image: "/social-medias/instagram.jfif",
  },
];

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",

        /* Deep Authority Foundation */
        background: `
          radial-gradient(circle at 2px 2px, rgba(212,175,55,0.15) 1px, transparent 1px),
          linear-gradient(180deg,#1e3a8a,#0f172a)
        `,
        backgroundSize: "28px 28px, cover",

        color: "#fff",
        py: 8,
        borderTop: "1px solid rgba(212,175,55,0.3)",
      }}
    >
      <Container maxWidth="lg">

        {/* Premium Heading (Apple/Stripe Gradient Trick) */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            mb: 4,
            letterSpacing: "0.6px",
            fontFamily: "'Montserrat', sans-serif",

            background:
              "linear-gradient(90deg,#d4af37,#ffffff,#d4af37)",
            backgroundSize: "200% auto",

            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SECOND CHANCE PRISONERS' SUPPORT FOUNDATION
        </Typography>

        {/* Social Media Section */}
        <Grid
          container
          justifyContent="center"
          spacing={4}
          sx={{ mb: 4 }}
        >
          {socialMedias.map((media, idx) => (
            <Grid item key={idx}>
              <IconButton
                component="a"
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  animation: `${softFloat} 4s ease-in-out infinite`,
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "scale(1.2)",
                    filter:
                      "drop-shadow(0 0 10px rgba(212,175,55,0.8))",
                  },
                }}
              >
                <Image
                  src={media.image}
                  alt={media.name}
                  width={45}
                  height={45}
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </IconButton>
            </Grid>
          ))}
        </Grid>

        {/* Divider Line */}
        <Box
          sx={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)",
            mb: 3,
          }}
        />

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.4px",
          }}
        >
          © {new Date().getFullYear()} SCPSF — All Rights Reserved
        </Typography>

      </Container>
    </Box>
  );
}