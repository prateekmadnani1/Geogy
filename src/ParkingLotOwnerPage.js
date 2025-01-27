import React, { useState } from "react";
import { Typography, Button, Card, CardContent } from "@mui/material";

const parkingLots = [
  { id: 1, name: "Downtown Parking Lot", location: "123 Main St.", availableSlots: 50 },
  { id: 2, name: "Airport Parking", location: "456 Terminal Ave.", availableSlots: 30 },
  { id: 3, name: "Mall Parking Lot", location: "789 Shopping Ln.", availableSlots: 75 },
];

const ParkingLotOwnerPage = () => {
  const [showParkingLots, setShowParkingLots] = useState(false);

  const handleViewParkingLots = () => {
    setShowParkingLots(true);
  };

  const handleScheduleAppointment = (lotId) => {
    alert(`Appointment scheduled for Parking Lot ID: ${lotId}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Parking Lot Owner Dashboard
      </Typography>
      
      {!showParkingLots && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleViewParkingLots}
        >
          View Parking Lots
        </Button>
      )}

      {showParkingLots && (
        <div>
          <Typography variant="h5" style={{ marginBottom: "20px" }}>
            Available Parking Lots
          </Typography>
          {parkingLots.map((lot) => (
            <Card
              key={lot.id}
              style={{ marginBottom: "10px", padding: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
            >
              <CardContent>
                <Typography variant="h6">{lot.name}</Typography>
                <Typography color="textSecondary">Location: {lot.location}</Typography>
                <Typography color="textSecondary">
                  Available Slots: {lot.availableSlots}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleScheduleAppointment(lot.id)}
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

export default ParkingLotOwnerPage;
