import React from "react";
import { Button, Typography } from "@mui/material";

const LoginPage = ({ onLogin }) => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Welcome to Green Energy Platform
      </Typography>
      <Typography variant="h6" style={{ marginBottom: "20px" }}>
        Please select your role to log in
      </Typography>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onLogin("provider")}
        >
          Login as Green Energy Provider
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onLogin("customer")}
        >
          Login as Customer
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
