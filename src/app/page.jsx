"use client";
import { motion } from "framer-motion";

export default function Home() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6", // light gray background
    flexDirection: "column",
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "16px 32px",
    margin: "12px",
    fontSize: "16px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "24px" }}>
        Choose Your Operating System
      </h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ ...buttonStyle, backgroundColor: "#1D4ED8" }} // Blue button
      >
        Linux / MacOS
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ ...buttonStyle, backgroundColor: "#16A34A" }} // Green button
      >
        Windows
      </motion.button>
    </div>
  );
}
