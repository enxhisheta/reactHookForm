import { ReactNode } from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box className="layout-container">
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>My Agency</Typography>
          <MenuIcon />
        </Toolbar>
      </AppBar>

      <Container component="main" className="layout-main">
        {children}
      </Container>

      <Box component="footer" className="layout-footer">
        <Typography>© 2023 My App</Typography>
      </Box>
    </Box>
  );
};

export default Layout;
