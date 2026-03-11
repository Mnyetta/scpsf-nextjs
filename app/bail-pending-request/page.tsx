"use client";

import { Container, Typography, Box } from "@mui/material";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BailForm from "@/components/bail/BailForm";

export default function BailPendingRequestPage() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          py: 10,
          background:
            "linear-gradient(180deg,#f8f9fc,#eef1f8)",
        }}
      >
        <Container maxWidth="md">

          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 800,
              mb: 6,
              fontFamily: "'Montserrat', sans-serif",
              background:
                "linear-gradient(90deg,#1e3a8a,#d4af37,#1e3a8a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.6px",
            }}
          >
            Bail Pending Appeal Request
          </Typography>

          <BailForm />

        </Container>
      </Box>

      <Footer />
    </>
  );
}