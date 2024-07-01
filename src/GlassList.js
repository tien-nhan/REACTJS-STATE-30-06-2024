import React from "react";

const GlassesList = ({ glasses, onSelect }) => {
  return (
    <div>
      {glasses.map((glasses, index) => (
        <img
          key={index}
          src={glasses}
          alt={`Glasses ${index}`}
          onClick={() => onSelect(glasses)}
          style={{ cursor: "pointer", margin: "10px" }}
        />
      ))}
    </div>
  );
};

export default GlassesList;
