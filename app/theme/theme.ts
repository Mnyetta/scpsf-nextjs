import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1",
    },
    secondary: {
      main: "#ffb300",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;