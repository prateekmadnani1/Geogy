import React, { useState } from 'react';

const EnergySubscription = () => {
    const [plan, setPlan] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle subscription to energy plan
    };
  
    return (
      <div>
        <h2>Choose Your Energy Subscription</h2>
        <form onSubmit={handleSubmit}>
          <label>Select Plan:</label>
          <select value={plan} onChange={(e) => setPlan(e.target.value)}>
            <option value="solar">Solar Energy</option>
            <option value="geothermal">Geothermal Energy</option>
            <option value="hybrid">Hybrid (Solar + Geothermal)</option>
          </select>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    );
  };
  export default EnergySubscription;
  