import React, { useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./ResponsiveAppBar";

export function OtpLoginMobilePage(){
  const host = "https://lmis-backend.onrender.com";
  const navigate = useNavigate();
  const [data, setData] = useState({
    otp: "",
  });
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.otp === "") {
      alert("Please fill all the fields");
      return;
    }
    await fetch(host + "/login-mobile-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: data.otp,
      }),
    }).then((res) => {
      if (res.status === 200) {
        alert("OTP verified successful");
        navigate('/displayABHA');
      } else {
        console.log(res);
        alert("OTP verification failed: " + res.statusText);
      }
    });

    };

    return(
        <>
        <ResponsiveAppBar/>
        <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Enter Mobile OTP Received for login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="otp"
            label="OTP"
            name="otp"
            onChange={handleChange}
            autoComplete="true"
            autoFocus
          />
         <RouterLink to="/displayAbha">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Verify OTP
          </Button>
          </RouterLink>
        </Box>
      </Box>
    </Container>
    </>
    )
}