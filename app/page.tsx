// app/page.tsx
export default function Home() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "150px 1fr",
      gridTemplateRows: "auto 1fr",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      margin: 0
    }}>
      <nav style={{
        borderRight: "2px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "10px"
      }}>
        <a href="/" title="Inicio">
          <img src="/logo.png" alt="Logo Lustrados" style={{ width: 100, cursor: "pointer" }} />
        </a>

        <a href="/trabajos" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", fontWeight: "bold", margin: "20px 0", color: "black" }}>
          TRABAJOS
        </a>

        <a href="/contactos" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", fontWeight: "bold", margin: "20px 0", color: "black" }}>
          CONTACTOS
        </a>

        <a href="/resenas" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", fontWeight: "bold", margin: "20px 0", color: "black" }}>
          RESEÑAS
        </a>
      </nav>

      <header style={{
        gridColumn: "2 / 3",
        padding: "20px",
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        borderBottom: "2px solid black"
      }}>
        LUSTRADOS Y CARPINTERÍA<br/>ARTIGAS
      </header>

      <main style={{
        gridColumn: "2 / 3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
      }}>
        <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
          <a href="https://instagram.com/tu_usuario_aqui" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram Logo" style={{ width: 80, cursor: "pointer" }} />
          </a>

          <a href="https://wa.me/59892669143?text=Hola%20Lustrados%20Artigas" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.png" alt="Whatsapp Logo" style={{ width: 80, cursor: "pointer" }} />
          </a>
        </div>
      </main>

      <footer style={{
        gridColumn: "2 / 3",
        textAlign: "center",
        padding: "10px",
        fontSize: "1.2rem"
      }}>
        TELÉFONO: 092 669 143
      </footer>
    </div>
  );
}
