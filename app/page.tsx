// app/page.tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleGoogleSignIn = () => {
    console.log('Iniciar sesión con Google');
    // Aquí iría la lógica real de autenticación con Google
  };

  const handleSignUp = () => {
    console.log('Registrarse');
    // Aquí iría la lógica real de registro
  };

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      gridTemplateRows: "auto 1fr auto",
      height: "100vh",
      fontFamily: "'Roboto', sans-serif",
      margin: 0,
      background: "linear-gradient(to bottom, #ffebcd, #cd853f)",
      overflowY: "auto",
    }}>
      <nav style={{
        borderRight: "2px solid #8B4513",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
        backgroundColor: "#DEB887",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      }}>
        <a href="/" title="Inicio" style={{ transition: "transform 0.3s ease" }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
          <img src="/logo.png" alt="Logo Lustrados" style={{ width: 120, cursor: "pointer" }} />
        </a>

        <button onClick={() => window.open('/trabajos', '_blank')} style={{
          textDecoration: "none",
          fontWeight: "bold",
          margin: "20px 0",
          color: "#fff",
          backgroundColor: "#8B4513",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s, transform 0.3s",
        }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A0522D"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#8B4513"; e.currentTarget.style.transform = "scale(1)"; }}>
          TRABAJOS
        </button>

        <button onClick={() => window.open('/contactos', '_blank')} style={{
          textDecoration: "none",
          fontWeight: "bold",
          margin: "20px 0",
          color: "#fff",
          backgroundColor: "#8B4513",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s, transform 0.3s",
        }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A0522D"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#8B4513"; e.currentTarget.style.transform = "scale(1)"; }}>
          CONTACTOS
        </button>

        <button onClick={() => window.open('/resenas', '_blank')} style={{
          textDecoration: "none",
          fontWeight: "bold",
          margin: "20px 0",
          color: "#fff",
          backgroundColor: "#8B4513",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s, transform 0.3s",
        }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A0522D"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#8B4513"; e.currentTarget.style.transform = "scale(1)"; }}>
          RESEÑAS
        </button>

        <button onClick={handleSignUp} style={{
          textDecoration: "none",
          fontWeight: "bold",
          margin: "20px 0",
          color: "#fff",
          backgroundColor: "#8B4513",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s, transform 0.3s",
        }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A0522D"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#8B4513"; e.currentTarget.style.transform = "scale(1)"; }}>
          REGISTRARSE
        </button>

        <button onClick={handleGoogleSignIn} style={{
          textDecoration: "none",
          fontWeight: "bold",
          margin: "20px 0",
          color: "#fff",
          backgroundColor: "#8B4513",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s, transform 0.3s",
        }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A0522D"; e.currentTarget.style.transform = "scale(1.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#8B4513"; e.currentTarget.style.transform = "scale(1)"; }}>
          INICIAR SESIÓN CON GOOGLE
        </button>
      </nav>

      <header style={{
        gridColumn: "2 / 3",
        padding: "30px",
        fontSize: "2.5rem",
        fontWeight: "bold",
        textAlign: "center",
        borderBottom: "2px solid #8B4513",
        backgroundColor: "#CD853F",
        color: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}>
        LUSTRADOS Y CARPINTERÍA ARTIGAS
        <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>Desde Artigas, Uruguay - Especialistas en madera con pasión y precisión</p>
      </header>

      <main style={{
        gridColumn: "2 / 3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "40px",
        padding: "40px",
        overflowY: "auto",
      }}>
        {/* Hero Section */}
        <section style={{ width: "100%", textAlign: "center", background: "url(/hero-wood.jpg) no-repeat center/cover", padding: "60px 0", color: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
          <h2 style={{ fontSize: "2rem" }}>Bienvenido a Lustrados Artigas</h2>
          <p>Transformamos madera en obras de arte. Descubre nuestros servicios únicos.</p>
          <button style={{
            marginTop: "20px",
            padding: "15px 30px",
            backgroundColor: "#8B4513",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.3s",
          }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A0522D"; e.currentTarget.style.transform = "rotate(5deg)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#8B4513"; e.currentTarget.style.transform = "rotate(0)"; }}>
            Explorar Servicios
          </button>
        </section>

        {/* Services Section */}
        <section style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          <div style={{ padding: "20px", backgroundColor: "#FFF8DC", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <h3>Lustrado de Muebles</h3>
            <p>Restauramos el brillo natural de tus muebles con técnicas artesanales.</p>
          </div>
          <div style={{ padding: "20px", backgroundColor: "#FFF8DC", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <h3>Carpintería Personalizada</h3>
            <p>Diseñamos y construimos piezas únicas a medida.</p>
          </div>
          <div style={{ padding: "20px", backgroundColor: "#FFF8DC", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <h3>Reparaciones</h3>
            <p>Arreglamos daños en madera con expertise profesional.</p>
          </div>
        </section>

        {/* About Section */}
        <section style={{ width: "100%", textAlign: "center", padding: "30px", backgroundColor: "#F4A460", borderRadius: "10px", color: "#fff" }}>
          <h2>Sobre Nosotros</h2>
          <p>Somos un equipo apasionado por la madera, ubicado en Artigas, Uruguay. Con años de experiencia, ofrecemos servicios de alta calidad en lustrado y carpintería, utilizando materiales ecológicos y técnicas innovadoras para crear piezas duraderas y bellas.</p>
        </section>

        {/* Contact Form */}
        <section style={{ width: "100%", maxWidth: "600px" }}>
          <h2>Contáctanos</h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input type="text" name="name" placeholder="Tu Nombre" value={formData.name} onChange={handleInputChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
            <input type="email" name="email" placeholder="Tu Email" value={formData.email} onChange={handleInputChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
            <textarea name="message" placeholder="Tu Mensaje" value={formData.message} onChange={handleInputChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", height: "100px" }} />
            <button type="submit" style={{
              padding: "10px",
              backgroundColor: "#8B4513",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s, box-shadow 0.3s",
            }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A0522D"; e.currentTarget.style.boxShadow = "0 0 10px #A0522D"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#8B4513"; e.currentTarget.style.boxShadow = "none"; }}>
              Enviar
            </button>
          </form>
          {submitted && <p style={{ color: "green", marginTop: "10px" }}>¡Mensaje enviado con éxito!</p>}
        </section>

        {/* Gallery Section */}
        <section style={{ width: "100%", textAlign: "center" }}>
          <button onClick={() => setShowGallery(!showGallery)} style={{
            padding: "10px 20px",
            backgroundColor: "#8B4513",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.3s",
          }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A0522D"; e.currentTarget.style.transform = "translateY(-5px)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#8B4513"; e.currentTarget.style.transform = "translateY(0)"; }}>
            {showGallery ? 'Ocultar Galería' : 'Ver Galería'}
          </button>
          {showGallery && (
            <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <img src="/gallery1.jpg" alt="Trabajo 1" style={{ width: "200px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", transition: "transform 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
              <img src="/gallery2.jpg" alt="Trabajo 2" style={{ width: "200px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", transition: "transform 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
              <img src="/gallery3.jpg" alt="Trabajo 3" style={{ width: "200px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", transition: "transform 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section style={{ width: "100%", maxWidth: "600px", textAlign: "center" }}>
          <h2>Suscríbete a Nuestro Newsletter</h2>
          <p>Recibe actualizaciones sobre nuevos servicios y ofertas especiales.</p>
          <input type="email" placeholder="Tu Email" style={{ padding: "10px", width: "70%", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }} />
          <button style={{
            padding: "10px 20px",
            backgroundColor: "#8B4513",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s, opacity 0.3s",
          }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#A0522D"; e.currentTarget.style.opacity = "0.8"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#8B4513"; e.currentTarget.style.opacity = "1"; }}>
            Suscribirse
          </button>
        </section>

        {/* Social Links */}
        <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
          <a href="https://instagram.com/tu_usuario_aqui" target="_blank" rel="noopener noreferrer" style={{ transition: "transform 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
            <img src="/instagram.png" alt="Instagram Logo" style={{ width: 80, cursor: "pointer" }} />
          </a>

          <a href="https://wa.me/59892669143?text=Hola%20Lustrados%20Artigas" target="_blank" rel="noopener noreferrer" style={{ transition: "transform 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
            <img src="/whatsapp.png" alt="Whatsapp Logo" style={{ width: 80, cursor: "pointer" }} />
          </a>

          <a href="https://facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer" style={{ transition: "transform 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
            <img src="/facebook.png" alt="Facebook Logo" style={{ width: 80, cursor: "pointer" }} />
          </a>
        </div>

        {/* Map Section */}
        <section style={{ width: "100%", height: "300px" }}>
          <h2>Nuestra Ubicación en Artigas, Uruguay</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13600.000000000001!2d-56.4667!3d-30.4000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI0JzAwLjAiUyA1NsKwMjgnMDAuMCJX!5e0!3m2!1sen!2suy!4v1690000000000!5m2!1sen!2suy"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </section>

        {/* FAQ Section */}
        <section style={{ width: "100%" }}>
          <h2>Preguntas Frecuentes</h2>
          <details style={{ marginBottom: "10px" }}>
            <summary style={{ cursor: "pointer", fontWeight: "bold" }}>¿Cuánto tiempo toma un lustrado?</summary>
            <p>Depende del tamaño, pero generalmente 3-5 días.</p>
          </details>
          <details style={{ marginBottom: "10px" }}>
            <summary style={{ cursor: "pointer", fontWeight: "bold" }}>¿Usan materiales ecológicos?</summary>
            <p>Sí, priorizamos productos sostenibles.</p>
          </details>
          <details>
            <summary style={{ cursor: "pointer", fontWeight: "bold" }}>¿Ofrecen garantía?</summary>
            <p>Sí, 1 año en todos nuestros servicios.</p>
          </details>
        </section>

        {/* Blog Teaser */}
        <section style={{ width: "100%", textAlign: "center" }}>
          <h2>Últimas Noticias del Blog</h2>
          <p>Consejos para mantener tus muebles lustrados. <a href="/blog" style={{ color: "#8B4513", textDecoration: "underline" }}>Leer más</a></p>
        </section>
      </main>

      <footer style={{
        gridColumn: "1 / 3",
        textAlign: "center",
        padding: "20px",
        fontSize: "1.2rem",
        backgroundColor: "#8B4513",
        color: "#fff",
      }}>
        TELÉFONO: 092 669 143 | Desde Artigas, Uruguay<br/>
        © 2025 Lustrados Artigas. Todos los derechos reservados.
      </footer>
    </div>
  );
}
