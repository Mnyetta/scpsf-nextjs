"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../../app/theme/theme"; // ✅ corrected path

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}