import React, { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const energyProviders = [
  { id: 1, name: "Solar Energy Solutions", location: "123 Solar St.", availableSlots: 20 },
  { id: 2, name: "Green Wind Power", location: "456 Windy Ave.", availableSlots: 15 },
  { id: 3, name: "Eco Hydro Power", location: "789 Water Ln.", availableSlots: 25 },
];

const CustomerPage = () => {
  const [scheduledProvider, setScheduledProvider] = useState(null);

  const handleScheduleAppointment = (provider) => {
    setScheduledProvider(provider);
    alert(`Appointment scheduled with ${provider.name}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" style={{ marginBottom: "20px", textAlign: "center" }}>
        Welcome, Customer
      </Typography>
      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Available Green Energy Providers
      </Typography>
      <div>
        {energyProviders.map((provider) => (
          <Card
            key={provider.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Typography variant="h6">{provider.name}</Typography>
              <Typography color="textSecondary">
                Location: {provider.location}
              </Typography>
              <Typography color="textSecondary">
                Available Appointments: {provider.availableSlots}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleScheduleAppointment(provider)}
              >
                Schedule Appointment
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      {scheduledProvider && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h6" color="green">
            You have successfully scheduled an appointment with{" "}
            {scheduledProvider.name}.
          </Typography>
        </div>
      )}
    </div>
  );
};

export default CustomerPage;
