import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // later: dynamic dark/light
    primary: { main: "#cf395d" },
    secondary: { main: "#4f46e5" },
    background: {
      default: "#f9fafb",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#6b7280",
    }
  },

  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    button: { textTransform: "none" },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
