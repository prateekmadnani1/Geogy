import React, { useState } from "react";
import { Typography, Button, Card, CardContent } from "@mui/material";

const energyProviders = [
  { id: 1, name: "Solar Energy Solutions", location: "123 Solar St.", availableSlots: 20 },
  { id: 2, name: "Green Wind Power", location: "456 Windy Ave.", availableSlots: 15 },
  { id: 3, name: "Eco Hydro Power", location: "789 Water Ln.", availableSlots: 25 },
];

const GreenEnergyProviderPage = () => {
  const [showProviders, setShowProviders] = useState(false);

  const handleViewProviders = () => {
    setShowProviders(true);
  };

  const handleScheduleAppointment = (providerId) => {
    alert(`Appointment scheduled for Green Energy Provider ID: ${providerId}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Green Energy Provider Dashboard
      </Typography>

      {!showProviders && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleViewProviders}
        >
          View Energy Providers
        </Button>
      )}

      {showProviders && (
        <div>
          <Typography variant="h5" style={{ marginBottom: "20px" }}>
            Available Energy Providers
          </Typography>
          {energyProviders.map((provider) => (
            <Card
              key={provider.id}
              style={{ marginBottom: "10px", padding: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
            >
              <CardContent>
                <Typography variant="h6">{provider.name}</Typography>
                <Typography color="textSecondary">Location: {provider.location}</Typography>
                <Typography color="textSecondary">
                  Available Appointments: {provider.availableSlots}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleScheduleAppointment(provider.id)}
              >
                Schedule Appointment
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default GreenEnergyProviderPage;
