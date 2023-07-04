import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { TextField, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const host = "https://lmis-backend.onrender.com";

  const [dob, setDob] = React.useState(null); // State to store the selected date

  const handleDobChange = (date) => {
    setDob(date); // Update the dob state when the date picker value changes
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Extract the values from the form fields
    const firstname = document.getElementById("firstname").value;
    const middlename = document.getElementById("middlename").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobilenumber").value;
    const abhaId = document.getElementById("abhaId").value;
    const alternate_mobileNumber = document.getElementById(
      "alternate_mobilenumber"
    ).value;
    const gender = document.querySelector(
      'input[name="row-radio-buttons-group"]:checked'
    ).value;
    // Extract other field values as needed

    // Prepare the patient data to be sent to the backend
    const patientData = {
      firstname,
      middlename,
      lastname,
      email,
      mobileNumber,
      abhaId,
      alternate_mobileNumber,
      dob,
      gender,
      // Add more fields as needed
    };

    try {
      // Make a POST request to the backend
      const response = await axios.post(host + "/addPatient", patientData);

      // Handle the response if needed
      console.log(response.data);
      navigate("/home");
      // Redirect to a success page or perform any other necessary actions
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error adding patient:", error);
      // Display an error message or perform any necessary error handling
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Personal Information" {...a11yProps(0)} />
          <Tab label="Demographic" {...a11yProps(1)} />
          <Tab label="Insurance" {...a11yProps(2)} />
          <Tab label="Disability Details" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "35ch" },
          }}
          noValidate
          justifyContent="center"
          autoComplete="off"
        >
          <div>
            <TextField FirstName required id="firstname" label="First Name" />
            <TextField MiddleName id="middlename" label="Middle Name" />
          </div>
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "35ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField LastName required id="lastname" label="Last Name" />
            <TextField Email required id="email" label="Email" />
          </div>
        </Box>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "35ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              Phone
              No
              id="mobilenumber"
              required
              label="Mobile Number"
              type="number"
            />
            <TextField
              Alternate
              Phone
              No
              id="alternate_mobilenumber"
              required
              label="Alternate Mobile Number"
              type="number"
            />
          </div>
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "35ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date Of Birth"
                value={dob}
                onChange={handleDobChange}
                renderInput={({ inputProps, InputProps }) => (
                  <TextField {...inputProps} {...InputProps} />
                )}
              />
            </LocalizationProvider>

            <TextField abhaId id="abhaId" label="Abha Number" />
          </div>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "20px",
            }}
          >
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label" required>
                Gender
              </FormLabel>
              <RadioGroup
                required
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
              <FormGroup
                style={{ marginTop: "20px", marginBottom: "20px" }}
                required
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I agree to share my Health ID with the laboratory for future references. (Consent For Using ABHA)"
                />
              </FormGroup>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={{ marginLeft: "20px", marginBottom: "20px" }}
              variant="contained"
              size="large"
              type="submit"
              onClick={handleSubmit}
            >
              Create
            </Button>
          </div>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Demographic
      </TabPanel>
      <TabPanel value={value} index={2}>
        Insurance
      </TabPanel>
      <TabPanel value={value} index={3}>
        Disability Details
      </TabPanel>
    </Box>
  );
}
