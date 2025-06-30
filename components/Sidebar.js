import { useState } from "react";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Home");

  const items = ["Home", "About", "Service", "Portfolio", "News", "Contact"];

  const sidebarStyle = {
    width: "220px",
    padding: "30px 20px",
    background: "linear-gradient(180deg, #1a1a1a, #2b2b2b)",
    height: "100vh",
    borderRight: "1px solid #333",
    display: "flex",
    flexDirection: "column",
  };

  const titleStyle = {
    color: "#f0f0f0",
    fontSize: "22px",
    letterSpacing: "2px",
    marginBottom: "30px",
    textAlign: "center",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={titleStyle}>INDIA</h2>
      <ul style={listStyle}>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => setActiveItem(item)}
            style={{
              margin: "12px 0",
              padding: "10px 15px",
              borderRadius: "8px",
              color: activeItem === item ? "#fff" : "#ccc",
              background: activeItem === item ? "#333" : "transparent",
              cursor: "pointer",
              transition: "background 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#333";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              if (activeItem !== item) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ccc";
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}




