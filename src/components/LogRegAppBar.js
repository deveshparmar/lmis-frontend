import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

function LogRegAppBar() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              onClick={() => {
                navigate("/");
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
              Laboratory Information Management System
            </Typography>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

            <Typography
              onClick={() => {
                navigate("/");
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
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
export default LogRegAppBar;
