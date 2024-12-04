import React, { useState } from "react";

const LocationPicker = () => {
  const [location, setLocation] = useState(""); // State to hold selected location

  const handleUseCurrentLocation = () => {
    // Check if geolocation is supported
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Set the current location as latitude and longitude (or fetch address using APIs)
          setLocation(`Lat: ${latitude}, Lon: ${longitude}`);
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Unable to fetch your location. Please check your browser settings.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", fontFamily: "Arial" }}>
      <label htmlFor="location" style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
        Location
      </label>
      <select
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "16px",
        }}
      >
        <option value="" disabled>
          Select a location
        </option>
        <option value="New York">New York</option>
        <option value="London">London</option>
        <option value="Tokyo">Tokyo</option>
      </select>

      <button
        onClick={handleUseCurrentLocation}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#675bc8",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "16px",
            height: "16px",
            border: "2px solid #675bc8",
            borderRadius: "50%",
            position: "relative",
          }}
        >
          <span
            style={{
              display: "block",
              width: "6px",
              height: "6px",
              backgroundColor: "#675bc8",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </span>
        Use current location
      </button>
    </div>
  );
};

export default LocationPicker;
