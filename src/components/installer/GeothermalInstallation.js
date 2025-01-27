const GeothermalInstallation = ({ lotId, geothermalStatus }) => {
    return (
      <div>
        <h3>Geothermal Installation for Lot {lotId}</h3>
        <p>Status: {geothermalStatus}</p>
      </div>
    );
  };
  export default GeothermalInstallation;
  