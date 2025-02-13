export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Choose Your Operating System</h1>
      <div style={{ marginTop: "20px" }}>
        <a
          href="/install-python-flask.ps1"
          download
          style={{
            display: "inline-block",
            padding: "12px 24px",
            margin: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Download script for Windows
        </a>
        <a
          href="/install-python-flask.sh"
          download
          style={{
            display: "inline-block",
            padding: "12px 24px",
            margin: "10px",
            backgroundColor: "#28A745",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Download script for Linux / MacOS
        </a>
      </div>
    </div>
  );
}
