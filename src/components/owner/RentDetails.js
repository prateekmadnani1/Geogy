const RentDetails = ({ rent, energyIncome }) => {
    return (
      <div>
        <h3>Rent Details</h3>
        <p>Monthly Rent: ${rent}</p>
        <p>Projected Energy Income: ${energyIncome}</p>
      </div>
    );
  };
  export default RentDetails;
  