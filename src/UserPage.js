import React from 'react';
import { Typography, Card, CardContent, Button } from '@mui/material';

const energyProviders = [
  { id: 1, name: 'Green Energy Co.', location: '123 Solar St.' },
  { id: 2, name: 'Eco Power LLC', location: '456 Renewable Ave.' },
  { id: 3, name: 'Clean Energy Partners', location: '789 Wind Way' },
];

const UserPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        Energy Providers
      </Typography>
      {energyProviders.map((provider) => (
        <Card key={provider.id} style={{ marginBottom: '10px', padding: '10px' }}>
          <CardContent>
            <Typography variant="h6">{provider.name}</Typography>
            <Typography color="textSecondary">{provider.location}</Typography>
          </CardContent>
          <Button variant="contained" color="primary">
            Contact
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default UserPage;
