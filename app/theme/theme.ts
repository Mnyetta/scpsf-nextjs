import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e3a8a", // deep SCPSF blue
    },
    secondary: {
      main: "#06b6d4", // vibrant cyan accent
    },
    background: {
      default: "#f9fafb", // very light gray page background
      paper: "#ffffff",   // white for cards and sections
    },
    text: {
      primary: "#1f2937", // dark gray for text
      secondary: "#4b5563", // lighter gray
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 20px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
        },
      },
    },
  },
});

export default theme;