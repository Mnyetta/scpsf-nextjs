"use client";

import { Box, Typography, Button, LinearProgress } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";
import { useState } from "react";

const heroSlides = [
  {
    image: "/images/5.jpg",
    title: "Our Mission",
    subtitle:
      "To enhance and provide timely and high-quality equal access to justice for prisoners who are without legal representation, and or without automatic government legal aid service, the indigent, the marginalized and vulnerable populations of prisoners.",
    ctaText: "Submit a Case",
    ctaLink: "/submit-case",
  },
  {
    image: "/images/4.jpg",
    title: "Volunteer Lawyers",
    subtitle:
      "Connect with experienced lawyers who volunteer to support prisoners seeking justice.",
    ctaText: "Volunteer Now",
    ctaLink: "/volunteer-lawyer",
  },
  {
    image: "/images/1.jpg",
    title: "Our Vision",
    subtitle:
      "To be a Tanzania reputable, just, equitable, credible, and a leading high-quality legal aid service provider assisting timely equal access to justice for prisoners who are not automatically covered by Government legal aid service, the indigent, marginalized, and vulnerable populations of prisoners.",
    ctaText: "Donate Today",
    ctaLink: "/donate",
  },
  {
    image: "/images/2.jpg",
    title: "Legal Education",
    subtitle:
      "Educating prisoners about their rights and responsibilities through legal awareness programs.",
    ctaText: "Learn More",
    ctaLink: "/legal-education",
  },
];

export default function HeroSection() {
  const [progress, setProgress] = useState(0);

  return (
    <Box sx={{ position: "relative" }}>
      {/* Progress Bar */}
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "4px",
          zIndex: 10,
          background: "rgba(255,255,255,0.1)",
          "& .MuiLinearProgress-bar": {
            background: "linear-gradient(90deg,#f5f5f5,#e0e0e0)",
          },
        }}
      />

      <Carousel
        autoPlay
        interval={12000}
        animation="fade"
        indicators={false}
        navButtonsAlwaysVisible
        onChange={() => setProgress(0)}
        sx={{ height: { xs: "65vh", md: "85vh" } }}
      >
        {heroSlides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              height: { xs: "65vh", md: "85vh" },
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: 2,
            }}
          >
            {/* Glass overlay card */}
            <Box
              className="heroGlass"
              sx={{
                textAlign: "center",
                maxWidth: "750px",
                p: { xs: 3, md: 5 },
              }}
            >
              {/* Title */}
              <Typography
                className="heroTitle"
                sx={{
                  fontSize: { xs: "1.8rem", md: "3rem" },
                  fontWeight: "600",
                  mb: 2,
                  color: "#f5f5f5",
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                }}
              >
                {slide.title}
              </Typography>

              {/* Subtitle */}
              <Typography
                className="heroSubtitle"
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  mb: 4,
                  color: "#fafafa",
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                }}
              >
                {slide.subtitle}
              </Typography>

            {/*
<Link href={slide.ctaLink}>
  <Button
    variant="contained"
    sx={{
      background: "linear-gradient(90deg,#f5f5f5,#e0e0e0)",
      px: 4,
      py: 1.3,
      fontWeight: "bold",
      borderRadius: "30px",
      fontSize: "1rem",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      color: "#333",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
      },
    }}
  >
    {slide.ctaText}
  </Button>
</Link>
*/}
            </Box>
          </Box>
        ))}
      </Carousel>

      <style jsx>{`
        /* Glassmorphism card */
        .heroGlass {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 18px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          animation: fadeUp 1.2s ease;
        }

        /* Text animation */
        .heroTitle {
          animation: slideDown 1s ease;
        }

        .heroSubtitle {
          animation: fadeIn 2s ease;
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
}