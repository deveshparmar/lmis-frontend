import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import BackupIcon from "@mui/icons-material/Backup";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "400px",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledInput = styled("input")(({ theme }) => ({
  width: "90%",
  padding: theme.spacing(1),
  marginTop: theme.spacing(2),
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.primary,
  boxShadow: `inset 0 2px 4px ${theme.palette.grey[200]}`,
  transition: "border-color 0.3s ease-in-out",

  "&:hover": {
    borderColor: theme.palette.grey[600],
  },

  "&:focus": {
    borderColor: theme.palette.primary.main,
    outline: "none",
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}40`,
  },
}));

export function SimpleBackdrop({
  openprop,
  handleBackdropClick,
  backdropRef,
  handleClose,
}) {
  const handleSubmit = () => {
    // Logic for handling the submit action
  };

  return (
    <div>
      <Backdrop
        ref={backdropRef}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={openprop}
        onClick={handleBackdropClick}
      >
        <StyledPaper elevation={3}>
          <StyledInput type="file" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "16px",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<BackupIcon />}
              onClick={handleSubmit}
              sx={{ width: "35%" }}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<CloseIcon />}
              onClick={handleClose}
              sx={{ width: "35%" }}
            >
              Close
            </Button>
          </div>
        </StyledPaper>
      </Backdrop>
    </div>
  );
}
