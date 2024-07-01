import React from "react";

const Face = ({ selectedGlasses }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img src="/path/to/face/image.jpg" alt="Face" />
      {selectedGlasses && (
        <img
          src={selectedGlasses}
          alt="Selected Glasses"
          style={{
            position: "absolute",
            top: "50px",
            left: "100px",
          }}
        />
      )}
    </div>
  );
};

export default Face;
