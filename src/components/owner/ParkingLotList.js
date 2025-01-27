import React, { useState } from 'react';
import { Box, TextField, MenuItem, Select, InputLabel, FormControl, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ParkingLotList = () => {
  const [locationFilter, setLocationFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [rentFilter, setRentFilter] = useState('');

  // Static parking lot data
  const parkingLots = [
    { id: 1, name: 'Downtown Lot', size: 20, location: 'Downtown', rent: 300 },
    { id: 2, name: 'Uptown Lot', size: 15, location: 'Uptown', rent: 250 },
    { id: 3, name: 'Central Lot', size: 25, location: 'Central', rent: 350 },
    { id: 4, name: 'Eastside Lot', size: 18, location: 'Eastside', rent: 275 },
    { id: 5, name: 'Westend Lot', size: 30, location: 'Westend', rent: 400 },
  ];

  // Filter the parking lots based on the selected criteria
  const filteredParkingLots = parkingLots.filter(lot => {
    return (
      (locationFilter ? lot.location === locationFilter : true) &&
      (sizeFilter ? lot.size >= sizeFilter : true) &&
      (rentFilter ? lot.rent <= rentFilter : true)
    );
  });

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 3 }}>
        {/* Location Filter */}
        <FormControl fullWidth>
          <InputLabel>Location</InputLabel>
          <Select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            label="Location"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Downtown">Downtown</MenuItem>
            <MenuItem value="Uptown">Uptown</MenuItem>
            <MenuItem value="Central">Central</MenuItem>
            <MenuItem value="Eastside">Eastside</MenuItem>
            <MenuItem value="Westend">Westend</MenuItem>
          </Select>
        </FormControl>

        {/* Size Filter */}
        <TextField
          label="Min Size"
          type="number"
          value={sizeFilter}
          onChange={(e) => setSizeFilter(e.target.value)}
          fullWidth
          variant="outlined"
        />

        {/* Rent Filter */}
        <TextField
          label="Max Rent"
          type="number"
          value={rentFilter}
          onChange={(e) => setRentFilter(e.target.value)}
          fullWidth
          variant="outlined"
        />
      </Box>

      {/* Parking Lot List */}
      <Grid container spacing={2}>
        {filteredParkingLots.map((lot) => (
          <Grid item xs={12} sm={6} md={4} key={lot.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{lot.name}</Typography>
                <Typography color="textSecondary">{lot.location}</Typography>
                <Typography>Size: {lot.size} spots</Typography>
                <Typography>Rent: ${lot.rent}/month</Typography>
                <Link to={`/lot/${lot.id}`}>
                  <Button variant="contained" color="primary" size="small">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ParkingLotList;
