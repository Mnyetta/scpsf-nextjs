"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function CTASection() {
  return (
    <Box sx={{ py: 12, backgroundColor: "#001f3f", color: "white", textAlign: "center" }}>
      <Container>
        {/* Floating Water Heading */}
        <h1 className="waterHeading">Join Our Mission</h1>

        <Typography variant="body1" sx={{ mb: 6, maxWidth: "600px", mx: "auto" }}>
          Your support can change lives. Submit a case, volunteer, or donate today.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            disabled
            sx={{
              backgroundColor: "white",
              color: "#001f3f",
              fontWeight: "bold",
              cursor: "not-allowed",
              opacity: 0.9,
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              "&:hover": { backgroundColor: "white" },
            }}
          >
            Submit a Case
          </Button>

       
        </Box>

        {/* Inline CSS for floating water effect */}
        <style jsx>{`
          .waterHeading {
            font-family: Arial, sans-serif;
            font-size: 5rem;
            text-transform: uppercase;
            text-align: center;
            color: #66ccff;
            position: relative;
            margin-bottom: 50px;
            text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
          }

          .waterHeading::before {
            content: 'Join Our Mission';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50%;
            color: #b0e9ff;
            overflow: hidden;
            text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
            animation: waterWave 6s infinite linear alternate;
          }

          @keyframes waterWave {
            0% { height: 20%; }
            25% { height: 55%; }
            50% { height: 35%; }
            75% { height: 75%; }
            100% { height: 50%; }
          }
        `}</style>
      </Container>
    </Box>
  );
}