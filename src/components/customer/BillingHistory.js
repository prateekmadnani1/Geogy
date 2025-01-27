const BillingHistory = ({ bills }) => {
    return (
      <div>
        <h3>Billing History</h3>
        <ul>
          {bills.map((bill, index) => (
            <li key={index}>
              <p>Month: {bill.month}</p>
              <p>Total: ${bill.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default BillingHistory;
  