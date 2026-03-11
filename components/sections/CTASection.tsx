//C:\xampp\htdocs\SCPSF\components\sections\CTASection.tsx
"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function CTASection() {
  return (
    <Box sx={{ py: 12, backgroundColor: "#E21B1B", color: "white", textAlign: "center" }}>
      <Container>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Join Our Mission
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, maxWidth: "600px", mx: "auto" }}>
          Your support can change lives. Submit a case, volunteer, or donate today.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
          <Link href="/submit-case">
            <Button variant="contained" sx={{ backgroundColor: "white", color: "#E21B1B" }}>
              Submit a Case
            </Button>
          </Link>
          <Link href="/donate">
            <Button variant="outlined" sx={{ borderColor: "white", color: "white" }}>
              Donate
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}