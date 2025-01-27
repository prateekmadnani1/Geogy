import { useState } from "react";

const InstallationProposalForm = () => {
  const [solarCost, setSolarCost] = useState("");
  const [geothermalCost, setGeothermalCost] = useState("");
  const [proposalDetails, setProposalDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle proposal submission
  };

  return (
    <div>
      <h2>Submit Installation Proposal</h2>
      <form onSubmit={handleSubmit}>
        <label>Solar Panel Installation Cost ($):</label>
        <input 
          type="number" 
          value={solarCost} 
          onChange={(e) => setSolarCost(e.target.value)} 
        />
        <label>Geothermal System Installation Cost ($):</label>
        <input 
          type="number" 
          value={geothermalCost} 
          onChange={(e) => setGeothermalCost(e.target.value)} 
        />
        <label>Additional Details:</label>
        <textarea 
          value={proposalDetails} 
          onChange={(e) => setProposalDetails(e.target.value)} 
        />
        <button type="submit">Submit Proposal</button>
      </form>
    </div>
  );
};
export default InstallationProposalForm;
