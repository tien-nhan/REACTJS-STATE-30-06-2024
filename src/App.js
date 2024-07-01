
import React, { useState } from "react";
import "./App.css";
import { datas } from "./data"; // Import dữ liệu từ file datas.js

const App = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  return (
    <div className="app">
      <div className="overlay"></div>
      <div className="title">TRY GLASSES APP ONLINE</div>
      <div className="faces-container">
        <div className="face-wrapper">
          <div className="face-container">
            <div className="face">
              {selectedGlasses && (
                <div className="glasses-info">
                  <div className="glass-title">{selectedGlasses.name}</div>
                  <p>{selectedGlasses.desc}</p>
                </div>
              )}
            </div>
            {selectedGlasses && (
              <>
                <img
                  src={selectedGlasses.url}
                  alt="Glasses"
                  className="glasses"
                />
              </>
            )}
          </div>
        </div>

        <div className="face-wrapper">
          <div className="face-container">
            <div className="face"></div>
          </div>
        </div>
      </div>
      <div className="glasses-list-container">
        <div className="glasses-list">
          {datas.map((glasses) => (
            <img
              key={glasses.id}
              src={glasses.url}
              alt={glasses.name}
              className="glasses-item"
              onClick={() => setSelectedGlasses(glasses)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
