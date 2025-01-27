import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';

const ParkingLotDetail = () => {
  const { id } = useParams(); // Get the id from the URL
  const [appointmentDate, setAppointmentDate] = useState('');
  const [message, setMessage] = useState('');

  // Static parking lot data
  const parkingLots = [
    { id: 1, name: 'Downtown Lot', size: 20, location: 'Downtown', rent: 300 },
    { id: 2, name: 'Uptown Lot', size: 15, location: 'Uptown', rent: 250 },
    { id: 3, name: 'Central Lot', size: 25, location: 'Central', rent: 350 },
    { id: 4, name: 'Eastside Lot', size: 18, location: 'Eastside', rent: 275 },
    { id: 5, name: 'Westend Lot', size: 30, location: 'Westend', rent: 400 },
  ];

  const parkingLot = parkingLots.find(lot => lot.id === parseInt(id));

  const handleBooking = () => {
    if (!appointmentDate) {
      setMessage('Please select a date for the appointment.');
      return;
    }
    setMessage(`Appointment booked for ${appointmentDate} with the owner of ${parkingLot.name}.`);
  };

  return (
    <Box>
      {parkingLot ? (
        <Box>
          <Card>
            <CardContent>
              <Typography variant="h4">{parkingLot.name}</Typography>
              <Typography variant="h6" color="textSecondary">{parkingLot.location}</Typography>
              <Typography>Size: {parkingLot.size} spots</Typography>
              <Typography>Rent: ${parkingLot.rent}/month</Typography>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" gutterBottom>
              Book an Appointment with the Owner:
            </Typography>
            <TextField
              label="Appointment Date"
              type="date"
              fullWidth
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={handleBooking}
            >
              Book Appointment
            </Button>

            {message && (
              <Typography color="success.main" sx={{ marginTop: 2 }}>
                {message}
              </Typography>
            )}
          </Box>
        </Box>
      ) : (
        <Typography variant="h5">Parking Lot Not Found</Typography>
      )}
    </Box>
  );
};

export default ParkingLotDetail;
