import React from "react";
import { useNavigate } from "react-router";

function Page404() {
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
        <h1>Page Not Found</h1>
        <button className="btn btn-success" onClick={() => navigate("/")}>
          Go To Landing Page
        </button>
      </div>
    </div>
  );
}

export default Page404;
