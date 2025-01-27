import axios from "axios";

const api = axios.create({
  baseURL: "https://your-api-endpoint.com",
});

// Function to submit parking lot listing
export const submitParkingLotListing = (data) => {
  return api.post("/parking-lot", data);
};

// Function to submit installation proposals
export const submitProposal = (data) => {
  return api.post("/installations", data);
};

// Function to handle subscription
export const subscribeToEnergyPlan = (data) => {
  return api.post("/subscription", data);
};

export default api;
