import React, { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const SnackbarComponent = ({ message, open, handleClose, severity }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity || "error"}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
