"use client"

import Image from "next/image"
import { Box, Typography, Container } from "@mui/material"

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 420, md: 520 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Image
        src="/images/prison-program.jfif"
        alt="Prison Justice Programs"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.65))",
        }}
      />

      <Container sx={{ position: "relative", textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            mb: 2,
          }}
        >
          Community Justice Programs
        </Typography>

        <Typography
          variant="h6"
          sx={{ maxWidth: 700, mx: "auto", opacity: 0.9 }}
        >
          Expanding equal access to justice for prisoners across Tanzania
          through legal aid, legal education and reintegration programs.
        </Typography>
      </Container>
    </Box>
  )
}