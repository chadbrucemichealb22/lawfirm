import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c9a84c",
      light: "#e8c14f",
      dark: "#9a7712",
    },
    secondary: {
      main: "#f5f0e8",
    },
    background: {
      default: "#0e1116",
      paper: "#141820",
    },
    text: {
      primary: "#f5f0e8",
      secondary: "#a09078",
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
    h1: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 },
    h2: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 },
    h3: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 },
    h4: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 },
    h5: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 },
    h6: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          fontFamily: "'Jost', sans-serif",
          fontWeight: 500,
          fontSize: "0.75rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            "& fieldset": { borderColor: "rgba(201,168,76,0.3)" },
            "&:hover fieldset": { borderColor: "rgba(201,168,76,0.6)" },
            "&.Mui-focused fieldset": { borderColor: "#c9a84c" },
          },
          "& .MuiInputLabel-root": {
            fontFamily: "'Jost', sans-serif",
            letterSpacing: "0.1em",
            fontSize: "0.8rem",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "rgba(201,168,76,0.2)" },
      },
    },
  },
});

export default theme;
