function Navbar() {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg,#2563eb,#1d4ed8)",
        color: "white",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,.15)",
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          🚀 Mini CRM
        </h1>

        <p
          style={{
            margin: 0,
            opacity: 0.9,
            fontSize: "14px",
          }}
        >
          Client Lead Management Dashboard
        </p>
      </div>

      <div
        style={{
          textAlign: "right",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontWeight: "600",
          }}
        >
          👋 Welcome
        </h3>

        <p
          style={{
            margin: "5px 0 0",
            opacity: 0.9,
            fontSize: "14px",
          }}
        >
          Admin Panel
        </p>
      </div>
    </nav>
  );
}

export default Navbar;