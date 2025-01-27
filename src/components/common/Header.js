import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Green Energy Platform</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {/* Button to get available parking lots */}
        <Link to="/owners" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" size="large">
            Get Available Parking Lots
          </Button>
        </Link>
        {/* Button to go to energy providers */}
        <Link to="/installers" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="secondary" size="large">
            View Energy Providers
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
