"use client";

import Navbar from "@/components/layout/Navbar";
import { Box } from "@mui/material";

export default function CommunityProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <Box component="main">{children}</Box>
    </Box>
  );
}