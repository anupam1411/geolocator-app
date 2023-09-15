import React, { useState } from "react";

const GeoLocation = () => {
  const [location, setLocation] = useState({});

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      setLocation({ error: "Geolocation is not supported by this browser." });
    }
  };

  return (
    <div className="p-4 border-2 text-center border-x-cyan-800 w-[40vw] h-[40vh]">
      <p className="mb-2 ">Click the button to get your coordinates.</p>
      <button
        onClick={getLocation}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try It
      </button>
      <p className="mt-2">
        {location.error
          ? location.error
          : `Latitude: ${location.latitude} Longitude: ${location.longitude}`}
      </p>
    </div>
  );
};

export default GeoLocation;
