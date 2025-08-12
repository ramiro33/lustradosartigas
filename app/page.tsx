export default function Home() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "150px 1fr",
      gridTemplateRows: "auto 1fr auto",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      margin: 0
    }}>
      <nav style={{
        borderRight: "2px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
        gap: "30px"
      }}>
        <a href="/" title="Inicio" style={{ transition: "transform 0.3s ease" }}>
          <img
            src="/logo.png"
            alt="Logo Lustrados"
            style={{
              width: 150,
              cursor: "pointer",
              transition: "transform 0.3s ease"
            }}
            onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
          />
        </a>

        {["TRABAJOS", "CONTACTOS", "RESEÑAS"].map((text, i) => (
          <a
            key={i}
            href={`/${text.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "black",
              fontSize: "1.1rem",
              transition: "color 0.3s ease, transform 0.3s ease"
            }}
            onMouseOver={e => {
              e.currentTarget.style.color = "#555";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.color = "black";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {text}
          </a>
        ))}
      </nav>

      <header style={{
        gridColumn: "2 / 3",
        padding: "30px 20px",
        fontSize: "2.5rem",
        fontWeight: "bold",
        textAlign: "center",
        borderBottom: "2px solid black"
      }}>
        LUSTRADOS Y CARPINTERÍA<br />ARTIGAS
      </header>

      <main style={{
        gridColumn: "2 / 3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px"
      }}>
        <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
          <a href="https://instagram.com/tu_usuario_aqui" target="_blank" rel="noopener noreferrer">
            <img
              src="/instagram.png"
              alt="Instagram Logo"
              style={{
                width: 350,
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}
              onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
            />
          </a>

          <a href="https://wa.me/59892669143?text=Hola%20Lustrados%20Artigas" target="_blank" rel="noopener noreferrer">
            <img
              src="/whatsapp.png"
              alt="Whatsapp Logo"
              style={{
                width: 350,
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}
              onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
            />
          </a>
        </div>
      </main>

      <footer style={{
        gridColumn: "2 / 3",
        textAlign: "center",
        padding: "20px",
        fontSize: "1.5rem",
        fontWeight: "bold"
      }}>
        TELÉFONO: 092 669 143
      </footer>
    </div>
  );
}

