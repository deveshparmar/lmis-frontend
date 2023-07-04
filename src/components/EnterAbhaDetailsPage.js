import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";

export default function EnterAbhaDetailsPage() {
  const host = "https://lmis-backend.onrender.com";
  const navigate = useNavigate();
  const [data, setdata] = useState({
    "email": "",
    "healthId": "",
    "firstName": "",
    "lastName": "",
    "middleName": "",
    "password": "",
  });
  const handleChange = (event) => {
    setdata({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.email === "" || data.healthId === "" || data.firstName === "" || data.middleName === "" || data.lastName === "" || data.password === "") {
      alert("Please fill all the fields");
      return;
    }
    await fetch(host + "/create-abha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        firstName: data.firstName,
        healthId: data.healthId,
        lastName: data.lastName,
        middleName: data.middleName,
        password: data.password
      }),
    }).then(response => response.json()) // As Fetch will not give response in Json format
    .then((response) => {
        if (response.healthIdNumber) { // If healthIdNumber is null,no abha was created
          localStorage.setItem("healthId",response.healthIdNumber);
          // console.log(response.healthIdNumber);
          // alert(res.healthIdNumber+"\n"+res.data.healthIdNumber+"\n"+res.data);
          alert("Your Abha created successfully.");
          navigate('/getHealthId');
        } else {
          console.log(response);
          alert("Error: HealthId Was Not created!!\nPlease Try Again After Sometime.");
        }
      });

    };
 
  return (
    <>
      <ResponsiveAppBar />
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
            Enter Details for creating Abha
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
              id="email"
              label="Email"
              name="email"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="FirstName"
              name="firstName"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="middleName"
              label="MiddleName"
              name="middleName"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="LastName"
              name="lastName"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="healthId"
              label="Health ID"
              name="healthId"
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
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Create Abha Number
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
