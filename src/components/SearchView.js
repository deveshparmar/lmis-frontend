import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import diagnosisImage from "../assets/diagnosis.png";
// import { SimpleBackdrop } from "./uploadfile";

export function SearchView({ onSearch }) {
  const navi = useNavigate();

  const handleClick = (event) => {
    const isButtonClicked = event.target.tagName === "BUTTON";
    const isMenuClicked = event.target.tagName === "DIV2";
    if (!isButtonClicked && !isMenuClicked) {
      navi("/userprofile");
    }
  };
  const host = "https://lmis-backend.onrender.com";
  const [patients, setPatients] = React.useState([]);
  React.useEffect(() => {
    async function fetchPatients() {
      const response = await axios.get(host + "/getPatients");
      setPatients(response.data);
    }
    fetchPatients();
  }, []);
  // console.log(patients.patients);
  const [searchText, setSearchText] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [setOpen] = React.useState(false);
  
  // const handleSearch = () => {
  //   const filteredResults = patients.filter(
  //     (data) =>
  //       data.abhaId.includes(searchText) || data.mobileNo.includes(searchText)
  //   );
  //   setSearchResults(filteredResults);
  // };

  const handleSearchTextChange = (event) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    if (newSearchText.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredResults = patients.patients.filter(
        (data) =>
          data.abhaId.includes(event.target.value) ||
          data.mobileNumber.includes(event.target.value)
      );
      setSearchResults(filteredResults);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        py: 5,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <TextField
        id="search-field"
        label="Search with Abha Id/Phone No"
        variant="outlined"
        size="medium"
        sx={{ width: 400, mb: 2 }}
        value={searchText}
        onChange={handleSearchTextChange}
      />

      {searchResults.length > 0 && searchText.trim() !== "" ? (
        <Box sx={{ marginTop: 4 }}>
          {searchResults.map((result) => (
            <Card
              variant="outlined"
              key={result.abhaId}
              sx={{ mb: 2, width: 600, boxShadow: 3 }}
              onClick={handleClick}
            >
              <CardContent sx={{ position: "relative" }}>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Button
                        variant="contained"
                        size="small"
                        {...bindTrigger(popupState)}
                        sx={{ position: "absolute", top: 20, right: 20 }}
                        endIcon={
                          popupState.isOpen ? (
                            <ArrowDropUpIcon />
                          ) : (
                            <ArrowDropDownIcon />
                          )
                        }
                      >
                        New Report
                      </Button>
                      <Menu {...bindMenu(popupState)}>
                        <RouterLink to="/reportDetails">
                          <MenuItem
                            onClick={() => {
                              popupState.close();
                              setOpen(true);
                            }}
                            component="div2"
                          >
                            Blood
                          </MenuItem>
                        </RouterLink>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>

                <Typography variant="h6" component="div">
                  {result.firstname.toUpperCase() +
                    " " +
                    result.lastname.toUpperCase()}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Abha Id: {result.abhaId}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Email: {result.email}
                </Typography>
                <Typography color="text.secondary">
                  Mobile No: {result.mobileNumber}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <img
          src={diagnosisImage}
          alt="Diagnosis"
          style={{
            width: 256,
            height: 256,
            paddingTop: "80px",
            paddingLeft: "80px",
          }}
        />
      )}
      {searchText.trim() !== "" && searchResults.length === 0 && (
        <Typography variant="body1" sx={{ marginTop: 4 }}>
          No results found.
        </Typography>
      )}
    </Box>
  );
}
