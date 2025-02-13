"use client";

import { useState } from "react";

export default function Home() {
  const [os, setOs] = useState(null);

  const handleDownload = (osType) => {
    setOs(osType);

    const scriptFile = osType === "windows" ? "install-python-flask.ps1" : "install-python-flask.sh";
    const link = document.createElement("a");
    link.href = `/${scriptFile}`;
    link.download = scriptFile;
    link.click();
  };

  const renderSteps = () => {
    const containerStyle = {
      marginTop: "30px",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "70%", // Set the width to 70%
      marginLeft: "auto",
      marginRight: "auto",
    };

    const commandStyle = {
      display: "block",
      margin: "10px 0",
      padding: "10px",
      backgroundColor: "#333",
      color: "#fff",
      borderRadius: "6px",
      fontFamily: "monospace",
      fontSize: "16px",
    };

    if (os === "windows") {
      return (
        <div style={containerStyle}>
          <h2>Steps to Run the Script on Windows:</h2>
          <ol style={{ listStyle: "none", padding: 0 }}>
            <li>1. Open PowerShell.</li>
            <li>2. Navigate to your <strong>Downloads</strong> folder:</li>
            <pre style={commandStyle}>cd $HOME\Downloads</pre>
            <li>3. Run the script:</li>
            <pre style={commandStyle}>./install-python-flask.ps1</pre>
            <li>4. If you encounter an execution policy restriction, run:</li>
            <pre style={commandStyle}>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</pre>
          </ol>
        </div>
      );
    } else if (os === "linux") {
      return (
        <div style={containerStyle}>
          <h2>Steps to Run the Script on Linux/MacOS:</h2>
          <ol style={{ listStyle: "none", padding: 0 }}>
            <li>1. Open a terminal.</li>
            <li>2. Navigate to your <strong>Downloads</strong> folder:</li>
            <pre style={commandStyle}>cd ~/Downloads</pre>
            <li>3. Make the script executable:</li>
            <pre style={commandStyle}>chmod +x install-python-flask.sh</pre>
            <li>4. Run the script:</li>
            <pre style={commandStyle}>./install-python-flask.sh</pre>
            <li>5. If necessary, run it with <strong>sudo</strong> for elevated privileges:</li>
            <pre style={commandStyle}>sudo ./install-python-flask.sh</pre>
          </ol>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Choose Your Operating System</h1>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => handleDownload("windows")}
          style={{
            display: "inline-block",
            padding: "12px 24px",
            margin: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Download script for Windows
        </button>
        <button
          onClick={() => handleDownload("linux")}
          style={{
            display: "inline-block",
            padding: "12px 24px",
            margin: "10px",
            backgroundColor: "#28A745",
            color: "white",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Download script for Linux / MacOS
        </button>
      </div>
      {renderSteps()}
    </div>
  );
}
