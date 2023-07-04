import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { useState } from "react";

export function LoginHealthIdPage(){
  const host = "https://lmis-backend.onrender.com";
  const navigate = useNavigate();
  const [data, setData] = useState({
    mobile: "",
  });
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (data.healthid === "") {
        alert("Please fill all the fields");
        return;
      }
      await fetch(host + "/auth-with-healthid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          healthid: data.healthid,
        }),
      }).then((res) => {
        if (res.status === 200) {
          alert("OTP sent successful");
          navigate('/sendLoginMobileOtp');
        } else {
          console.log(res);
          alert("OTP sent failed: " + res.statusText);
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
          Enter HealthID for Login 
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="healthid"
            label="Health ID"
            name="healthid"
            onChange={handleChange}
            autoComplete="true"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Verify OTP
          </Button>
        </Box>
      </Box>
    </Container>
    </>
    )
}