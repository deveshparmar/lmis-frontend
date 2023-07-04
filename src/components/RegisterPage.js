import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LogRegAppBar from "./LogRegAppBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const host = "https://lmis-backend.onrender.com";

  const [data, setData] = useState({
    labId: "",
    name: "",
    labName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      data.labId === "" ||
      data.name === "" ||
      data.labName === "" ||
      data.email === "" ||
      data.password === "" ||
      data.cpassword === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    if (data.password !== data.cpassword) {
      alert("Passwords do not match");
      return;
    }
    localStorage.setItem("email",data.email);
    await fetch(host + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        labId: data.labId,
        name: data.name,
        labName: data.labName,
        email: data.email,
        password: data.password,
      }),
    }).then((res) => {
      if (res.status === 201) {
        alert("Registration successful");
        navigate("/home");
      } else {
        alert("Registration failed: " + res.message);
      }
    });
  };

  return (
    <>
      <LogRegAppBar />
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 4,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"            
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="labId"
              label="Lab Id"
              name="labId"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="labName"
              label="Lab Name"
              name="labName"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              id="cpassword"
              name="cpassword"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <RouterLink to="/login" variant="body2">
                  {"Have an account? Log in"}
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
