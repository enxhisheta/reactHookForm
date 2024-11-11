import { ReactNode } from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box className="layout-container">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Agency</Typography>
        </Toolbar>
      </AppBar>

      <Container component="main" className="layout-main">
        {children}
      </Container>

      <Box component="footer" className="layout-footer">
        <Typography variant="body2">© 2023 My App</Typography>
      </Box>
    </Box>
  );
};

export default Layout;
