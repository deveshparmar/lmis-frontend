import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { lightBlue } from "@mui/material/colors";

const pages = [
  { name: "Home", link: "/home" },
  { name: "About Us", link: "/aboutus" },
];
const settings = [
  { name: "Profile", link: "/profile" },
  { name: "Logout", link: "/" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
           
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
           
            <Typography
              onClick={() => {
                navigate("/home");
              }}
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".3rem",
                color: "inherit",
                fontSize: "1.5rem",
                textDecoration: "none",
              }}
            >
              LIMS
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <RouterLink
                      style={{
                        textDecoration: "none",
                      }}
                      to={page.link}
                    >
                      <Typography
                        textAlign="center"
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        {page.name}
                      </Typography>
                    </RouterLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
           
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
           
           
            <Typography
              onClick={() => {
                navigate("/home");
              }}
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "1.0rem",
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Laboratory Information Management System
            </Typography>
           
           
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <RouterLink
                  to={page.link}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    {page.name}
                  </Button>
                </RouterLink>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/202002_Laboratory_instrument_microscope.svg"  alt="null"/>
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <RouterLink
                    to={setting.link}
                    style={{ textDecoration: "none" }}
                  >
                    <Button sx={{ color: lightBlue[800], display: "block" }}>
                      {setting.name}
                    </Button>
                  </RouterLink>
                ))}
              </Menu>
            </Box>


          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
export default ResponsiveAppBar;
