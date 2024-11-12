import { ReactNode } from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box className="layout-container">
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgba(25, 118, 210, 0.6)" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem ",
          }}
        >
          <Typography variant="h5">My Agency</Typography>
          <MenuIcon sx={{ fontSize: 30 }} />
        </Toolbar>
      </AppBar>

      <Container component="main" className="layout-main">
        {children}
      </Container>

      <Box component="footer" className="layout-footer">
        <Typography>© 2024 My Agency</Typography>
      </Box>
    </Box>
  );
};

export default Layout;
