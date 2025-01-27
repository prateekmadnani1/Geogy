import React from "react";
import { Button, Typography, Box } from "@mui/material";
import landingPageImage from "./LandingPage.jpeg"; // Import your image here

const LoginPage = ({ onLogin }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${landingPageImage})`, // Use the imported image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark transparent overlay
        }}
      ></Box>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.85)", // Slightly transparent white background for login form
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "2.5rem",
            fontWeight: 600,
            marginBottom: "20px",
            color: "#333", // Darker color for the heading text
          }}
        >
          Welcome to Geogy
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.1rem",
            fontWeight: 400,
            marginBottom: "30px",
            color: "#555", // Darker color for the subheading text
          }}
        >
          Choose your role to log in and get started
        </Typography>
        <Box>
          <Button
            variant="contained"
            fullWidth
            sx={{
              padding: "15px",
              fontSize: "1.1rem",
              marginBottom: "15px",
              backgroundColor: "#007bff",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#0056b3",
                transform: "translateY(-3px)",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              },
            }}
            onClick={() => onLogin("provider")}
          >
            Login as Green Energy Provider
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{
              padding: "15px",
              fontSize: "1.1rem",
              marginBottom: "15px",
              backgroundColor: "#28a745",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#218838",
                transform: "translateY(-3px)",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
              },
            }}
            onClick={() => onLogin("customer")}
          >
            Login as Customer
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
