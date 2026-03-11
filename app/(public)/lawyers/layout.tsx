"use client";

import { ReactNode } from "react";
import { Box } from "@mui/material";

export default function LawyersLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#f9fbff 0%,#ffffff 40%,#f6f8fc 100%)",
      }}
    >
      {/* Premium top spacing */}
      <Box
        sx={{
          height: 80,
          background:
            "linear-gradient(90deg,#8B0000,#A00000,#B22222)",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        }}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          maxWidth: 1400,
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: 4,
        }}
      >
        {children}
      </Box>

      {/* Premium footer strip */}
      <Box
        sx={{
          height: 50,
          mt: 6,
          background:
            "linear-gradient(90deg,#B22222,#8B0000)",
        }}
      />
    </Box>
  );
}