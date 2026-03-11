"use client";

import { Box, Container, Typography } from "@mui/material";

export default function MissionSection() {
  return (
    <Container sx={{ py: 12 }}>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}>
        Our Mission
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: "800px",
          mx: "auto",
          textAlign: "center",
          color: "text.secondary",
          fontSize: { xs: "1rem", md: "1.25rem" },
        }}
      >
        SECOND CHANCE PRISONERS' SUPPORT FOUNDATION (SCPSF) exists to support forgotten men in prison,
        giving them legal aid, hope, and a path to reintegrate into society. We connect prisoners
        with volunteer lawyers and donors to fund their cases.
      </Typography>
    </Container>
  );
}