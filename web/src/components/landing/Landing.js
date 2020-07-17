import React, { useState } from "react";

const Landing = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
      }}
    >
      {children}
    </div>
  );
};

export default Landing;
