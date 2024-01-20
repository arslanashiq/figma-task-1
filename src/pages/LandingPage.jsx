import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="d-grid">
        <h4>Which page you want To Visit?</h4>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-success"
              onClick={() => navigate("/product-listing")}
            >
              List Page
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-success"
              onClick={() => navigate("/product-detail")}
            >
              Detail Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
