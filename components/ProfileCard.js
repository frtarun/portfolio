export default function ProfileCard() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1c1c1c, #2e2e2e)",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        padding: "40px",
        maxWidth: "800px",
        margin: "40px auto"
      }}
    >
      {/* LEFT SIDE IMAGE */}
      <img
        src="/profile.jpg"
        alt="Tarun Singh Lodha"
        style={{
          borderRadius: "50%",
          width: "180px",
          height: "180px",
          border: "4px solid #fff",
          boxShadow: "0 4px 15px rgba(0,0,0,0.6)",
          objectFit: "cover"
        }}
      />

      {/* RIGHT SIDE CONTENT */}
      <div
        style={{
          marginLeft: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            color: "#fff",
            fontWeight: "600",
            letterSpacing: "1px",
            margin: 0
          }}
        >
          TARUN SINGH LODHA
        </h1>
        <p
          style={{
            maxWidth: "500px",
            color: "#ccc",
            marginTop: "15px",
            fontSize: "17px",
            lineHeight: "1.6"
          }}
        >
          Enthusiastic coder and tech explorer based in India. Passionate about web development, Next.js, and building beautiful interfaces.
        </p>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "18px",
            fontSize: "24px"
          }}
        >
          {/* Website */}
          <span
            title="Website"
            style={{ cursor: "pointer", transition: "transform 0.2s" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.3)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            🌐
          </span>

          {/* Twitter */}
          <span
            title="Twitter"
            style={{ cursor: "pointer", transition: "transform 0.2s" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.3)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            🐦
          </span>

          {/* Instagram */}
          <span
            title="Instagram"
            style={{ cursor: "pointer", transition: "transform 0.2s" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.3)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            📸
          </span>

          {/* WhatsApp */}
          <span
            title="WhatsApp"
            style={{ cursor: "pointer", transition: "transform 0.2s" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.3)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            💬
          </span>
        </div>
      </div>
    </div>
  );
}


