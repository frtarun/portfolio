export default function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        padding: "30px 20px",
        background: "linear-gradient(180deg, #1a1a1a, #2b2b2b)",
        height: "100vh",
        borderRight: "1px solid #333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <h2
        style={{
          color: "#f0f0f0",
          fontSize: "22px",
          letterSpacing: "2px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        INDIA
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {["Home", "About", "Service", "Portfolio", "News", "Contact"].map((item) => (
          <li
            key={item}
            style={{
              margin: "12px 0",
              padding: "10px 15px",
              borderRadius: "8px",
              color: "#ccc",
              cursor: "pointer",
              transition: "background 0.3s, color 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#333";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#ccc";
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}


