import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, CardActions, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const ParkingLotListPage = () => {
  // Dummy data for parking lots
  const parkingLots = [
    {
      id: 1,
      name: 'Central Parking Lot',
      location: '123 Main St, Cityville',
      size: '200 sq meters',
      rent: '$500/month',
    },
    {
      id: 2,
      name: 'West End Parking',
      location: '456 West End Ave, Townsville',
      size: '150 sq meters',
      rent: '$400/month',
    },
    {
      id: 3,
      name: 'East Side Parking',
      location: '789 East Rd, Villeton',
      size: '180 sq meters',
      rent: '$450/month',
    },
  ];

  const [selectedDate, setSelectedDate] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedParkingLot, setSelectedParkingLot] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleScheduleAppointment = (lot) => {
    setSelectedParkingLot(lot);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedDate(''); // Reset the date when the dialog is closed
  };

  const handleConfirmAppointment = () => {
    alert(`Appointment scheduled with ${selectedParkingLot.name} on ${new Date(selectedDate).toDateString()}`);
    handleCloseDialog();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <Typography variant="h4" style={{ textAlign: 'center' }}>Available Parking Lots</Typography>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {parkingLots.map((lot) => (
          <Card key={lot.id} style={{ maxWidth: 300, boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <CardContent>
              <Typography variant="h6">{lot.name}</Typography>
              <Typography color="textSecondary">{lot.location}</Typography>
              <Typography variant="body2" color="textSecondary">{lot.size}</Typography>
              <Typography variant="body2" color="textSecondary">{lot.rent}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" onClick={() => handleScheduleAppointment(lot)}>
                Schedule Appointment
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {/* Appointment Dialog */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Schedule Appointment</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Select a date to meet with {selectedParkingLot?.name} and discuss solar panel installation.
          </Typography>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={handleDateChange} 
            style={{ width: '100%', padding: '10px', marginTop: '10px' }} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmAppointment} color="primary" disabled={!selectedDate}>
            Confirm Appointment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ParkingLotListPage;
