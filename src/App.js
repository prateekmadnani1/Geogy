import React, { useState } from "react";
import LoginPage from "./LoginPage";
import GreenEnergyProviderPage from "./GreenEnergyProviderPage";
import CustomerPage from "./CustomerPage";

const App = () => {
  const [loginType, setLoginType] = useState(""); // 'provider' or 'customer'

  const handleLogin = (type) => {
    setLoginType(type); // Set the type after login
  };

  return (
    <>
      {loginType === "" && <LoginPage onLogin={handleLogin} />}
      {loginType === "provider" && <GreenEnergyProviderPage />}
      {loginType === "customer" && <CustomerPage />}
    </>
  );
};

export default App;
