import React, { useEffect, useState } from 'react';
import axios from '../services/api'; // Assuming you have an API service set up for data fetching

const EnergyProduction = () => {
  const [energyData, setEnergyData] = useState({
    solarEnergy: 0,
    geothermalEnergy: 0,
    totalEnergy: 0,
  });

  // Fetch energy production data from an API
  useEffect(() => {
    const fetchEnergyData = async () => {
      try {
        const response = await axios.get('/api/energy-production'); // Replace with your actual API endpoint
        const { solarEnergy, geothermalEnergy } = response.data;
        setEnergyData({
          solarEnergy,
          geothermalEnergy,
          totalEnergy: solarEnergy + geothermalEnergy,
        });
      } catch (error) {
        console.error('Error fetching energy production data:', error);
      }
    };

    fetchEnergyData();
  }, []);

  return (
    <div className="energy-production">
      <h2>Energy Production Overview</h2>
      <div className="energy-stats">
        <p><strong>Solar Energy Production:</strong> {energyData.solarEnergy} kWh</p>
        <p><strong>Geothermal Energy Production:</strong> {energyData.geothermalEnergy} kWh</p>
        <p><strong>Total Energy Production:</strong> {energyData.totalEnergy} kWh</p>
      </div>
    </div>
  );
};

export default EnergyProduction;
