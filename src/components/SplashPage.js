import React from "react";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

function SplashPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#f2f2f2",
          padding: "50px",
          maxWidth: "800px",
        }}
      >
        <h1
          style={{ color: "#333", display: "flex", justifyContent: "center" }}
        >
          Welcome to the LIMS
        </h1>
        <p style={{ color: "#666", display: "flex", justifyContent: "center" }}>
          Start your journey with us!
        </p>
        <p style={{ color: "#666", display: "flex", justifyContent: "center" }}>
          Here, you can manage and track various laboratory operations and
          information.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <RouterLink to="/login">
            <Button variant="contained">Login</Button>
          </RouterLink>
          <RouterLink to="/register">
            <Button variant="outlined" sx={{ ml: 2 }}>
              Register
            </Button>
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
