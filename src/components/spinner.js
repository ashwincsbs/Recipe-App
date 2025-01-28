import React from "react";
import "../App.css";


const Spinner = () => (
  <div style={{ textAlign: "center", margin: "20px 0" }}>
    <div className="spinner"></div>
    <style>
      {`
        .spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #007bff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

export default Spinner;
