import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { useState } from "react";


export function HealthIdAadhaarPage(){
  const host = "https://lmis-backend.onrender.com";
  const navigate = useNavigate();
  const [data, setData] = useState({
    aadhaar: "",
  });
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (data.aadhaar === "") {
        alert("Please fill all the fields");
        return;
      }
      await fetch(host + "/generate-aadhaar-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aadhaar: data.aadhaar,
        }),
      }).then((res) => {
        if (res.status === 200) {
          alert("OTP sent successful");
          navigate('/sendAadhaarOtp');
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
          Create Health Id with Aadhaar Number
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="aadhaar"
            label="Aadhaar Number"
            name="aadhaar"
            onChange={handleChange}
            autoComplete
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Send OTP
          </Button>
        </Box>
      </Box>
    </Container>
    </>
    )
}