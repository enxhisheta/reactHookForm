import { createTheme, ThemeOptions } from "@mui/material/styles";

const commonThemeSettings: ThemeOptions = {
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "3.2rem",
      lineHeight: 1.1,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "0.6em 1.2em",
          border: "1px solid transparent",
          "&:hover": {
            borderColor: "#646cff",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          "&:hover": {
            color: "#535bf2",
          },
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: "light",
    primary: {
      main: "#646cff",
      dark: "#535bf2",
    },
    background: {
      default: "#ffffff",
      paper: "#f9f9f9",
    },
    text: {
      primary: "#213547",
    },
  },
});

export const darkTheme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: "dark",
    primary: {
      main: "#646cff",
      dark: "#535bf2",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
    },
  },
});
