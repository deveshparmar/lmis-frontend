import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const ContainerWrapper = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4), // Increase or decrease the spacing as needed
  marginBottom: theme.spacing(2),
}));

const FieldsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const TableContainerWrapper = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const useStyles = () => ({
  container: ContainerWrapper,
  fieldsContainer: FieldsContainer,
  tableContainer: TableContainerWrapper,
});

const userProfile = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  // Example data fetched from database
  const fieldsData = {
    name: "Devam Shah",
    abhaIDNumber: "1234567891234",
    dob: "1990-01-01",
    gender: "Male",
    mobileNumber: "1234567890",
  };
  const viewReportButton = () => {
    return (
      <Button
        variant="contained"
        color="primary"
        style={{ position: "relative", top: 0, right: 0, marginTop: "1rem" }}
      >
        View Report
      </Button>
    );
  };

  return (
    <>
      <ResponsiveAppBar />
      <classes.container>
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", marginTop: "1rem" }}
        >
          {fieldsData.name}'s Profile Details
        </Typography>
        <classes.fieldsContainer>
          <Typography>Name: {fieldsData.name}</Typography>
          <Typography>AbhaID Number: {fieldsData.abhaIDNumber}</Typography>
          <Typography>Date of Birth: {fieldsData.dob}</Typography>
          <Typography>Gender: {fieldsData.gender}</Typography>
          <Typography>Mobile Number: {fieldsData.mobileNumber}</Typography>
        </classes.fieldsContainer>
        <Button
          variant="contained"
          color="primary"
          style={{ position: "relative", top: 0, right: 0, marginTop: "1rem" }}
        >
          Link to AbhaID
        </Button>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button
                variant="contained"
                style={{
                  position: "relative",
                  top: 0,
                  right: 0,
                  marginTop: "1rem",
                  marginLeft: "1rem",
                }}
                {...bindTrigger(popupState)}
                S
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
        <classes.tableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No</TableCell>
                <TableCell>Report Type</TableCell>
                <TableCell>Date/Time</TableCell>
                <TableCell>Doctor Name</TableCell>
                <TableCell>Report </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Lab Report</TableCell>
                <TableCell>2023-06-24 10:00 AM</TableCell>
                <TableCell>Dr. Hemang upadhyay</TableCell>
                <TableCell>{viewReportButton()}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>X-Ray Report</TableCell>
                <TableCell>2023-06-23 02:30 PM</TableCell>
                <TableCell>Dr. Aanchal Mishra</TableCell>
                <TableCell>{viewReportButton()}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>lambda-Ray Report</TableCell>
                <TableCell>2023-06-29 04:30 PM</TableCell>
                <TableCell>Dr. Samir patel</TableCell>
                <TableCell>{viewReportButton()}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>gamma-Ray Report</TableCell>
                <TableCell>2021-03-01 01:17 PM</TableCell>
                <TableCell>Dr. Vivek bhindra</TableCell>
                <TableCell>{viewReportButton()}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>Z-axis Report</TableCell>
                <TableCell>2021-03-01 01:17 PM</TableCell>
                <TableCell>Dr. Mahek Kher</TableCell>
                <TableCell>{viewReportButton()}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </classes.tableContainer>
      </classes.container>
    </>
  );
};

export default userProfile;
