import { Box } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
export function NewButtonPanel() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        py: 2,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <RouterLink to="/newPatient">
        <Button variant="contained">New Patient</Button>
      </RouterLink>
      {/* <RouterLink to="/home">
        <Button variant="outlined" sx={{ ml: 2 }}>
          Create Health Id
        </Button>
      </RouterLink> */}
      <PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <Button variant="outlined" endIcon={popupState.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} {...bindTrigger(popupState)} sx={{ ml: 2 }}>
        Create Health Id
      </Button>
      <Menu {...bindMenu(popupState)}>
        <RouterLink to="/createHidAadhaar">
        <MenuItem onClick={popupState.close}>With Aadhar</MenuItem>
        </RouterLink>
        <RouterLink to="/createHidDL">
        <MenuItem onClick={popupState.close}>With DL/PAN</MenuItem>
        </RouterLink>
      </Menu>
    </React.Fragment>
  )}
</PopupState>
    </Box>
  );
}
