import { ReactNode } from "react";
//import { ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  // ToggleButton,
  // ToggleButtonGroup,
} from "@mui/material";
// import { LightMode, DarkMode } from "@mui/icons-material";
//import { useTheme } from "../store/ThemeContext";
import { lightTheme, darkTheme } from "../theme";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const { isDarkMode, toggleTheme } = useTheme();

  // const handleThemeChange = (
  //   _event: React.MouseEvent<HTMLElement>,
  //   value: string
  // ) => {
  //   if (value !== null) {
  //     toggleTheme();
  //   }
  // };

  return (
    //<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <Box className="layout-container">
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>My Agency</Typography>
          {/* <ToggleButtonGroup
              color="standard"
              value={isDarkMode ? "dark" : "light"}
              exclusive
              onChange={handleThemeChange}
              aria-label="theme toggle"
              size="small"
            >
              <ToggleButton value="light">
                <LightMode />
              </ToggleButton>
              <ToggleButton value="dark">
                <DarkMode />
              </ToggleButton>
            </ToggleButtonGroup> */}
        </Toolbar>
      </AppBar>

      <Container component="main" className="layout-main">
        {children}
      </Container>

      <Box component="footer" className="layout-footer">
        <Typography>© 2023 My App</Typography>
      </Box>
    </Box>
    //</ThemeProvider>
  );
};

export default Layout;
