import { useState } from "react";

const ParkingLotForm = () => {
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [rent, setRent] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission to backend or state management
  };
  
  return (
    <div>
      <h2>List Your Parking Lot</h2>
      <form onSubmit={handleSubmit}>
        <label>Location:</label>
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
        />
        <label>Size (sq ft):</label>
        <input 
          type="number" 
          value={size} 
          onChange={(e) => setSize(e.target.value)} 
        />
        <label>Monthly Rent ($):</label>
        <input 
          type="number" 
          value={rent} 
          onChange={(e) => setRent(e.target.value)} 
        />
        <button type="submit">List Parking Lot</button>
      </form>
    </div>
  );
};
export default ParkingLotForm;
