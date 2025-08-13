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
      background: "#1A2A44",
      overflowY: "auto",
    }}>
      <header style={{
        gridColumn: "1 / 3",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#1A2A44",
        color: "#D4A017",
        borderBottom: "2px solid #D4A017",
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="Logo Lustrados Artigas" style={{ width: 50, marginRight: "10px" }} />
          <h1 style={{ fontSize: "1.5rem", margin: 0 }}>LUSTRADOS ARTIGAS</h1>
        </div>
        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={{ color: "#D4A017", textDecoration: "none", fontWeight: "bold" }}>Inicio</a>
          <a href="/resenas" style={{ color: "#D4A017", textDecoration: "none", fontWeight: "bold" }}>Opiniones</a>
          <a href="/servicio" style={{ color: "#D4A017", textDecoration: "none", fontWeight: "bold" }}>Servicio</a>
          <a href="/galeria" style={{ color: "#D4A017", textDecoration: "none", fontWeight: "bold" }}>Galería</a>
          <button onClick={handleGoogleSignIn} style={{
            backgroundColor: "#D4A017",
            color: "#1A2A44",
            border: "none",
            padding: "5px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}>Login</button>
        </nav>
      </header>

      <nav style={{
        gridColumn: "1",
        borderRight: "2px solid #D4A017",
        padding: "20px",
        backgroundColor: "#1A2A44",
        color: "#fff",
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "15px" }}>
          <h3 style={{ margin: "0 0 10px 0" }}>Trabajos Recientes</h3>
          <a href="/trabajos" style={{ color: "#fff", textDecoration: "none" }}>Proyectos</a>
          <a href="/contactos" style={{ color: "#fff", textDecoration: "none" }}>Asistencia</a>
          <a href="/presupuestos" style={{ color: "#fff", textDecoration: "none" }}>Presupuestos</a>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <a href="https://facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer" style={{ transition: "transform 0.3s" }}>
              <img src="/Facebook.png" alt="Facebook Logo" style={{ width: 30, cursor: "pointer" }} />
            </a>
            <a href="https://instagram.com/tu_usuario_aqui" target="_blank" rel="noopener noreferrer" style={{ transition: "transform 0.3s" }}>
              <img src="/instagram.png" alt="Instagram Logo" style={{ width: 30, cursor: "pointer" }} />
            </a>
            <a href="https://wa.me/59892669143?text=Hola%20Lustrados%20Artigas" target="_blank" rel="noopener noreferrer" style={{ transition: "transform 0.3s" }}>
              <img src="/whatsapp.png" alt="Whatsapp Logo" style={{ width: 30, cursor: "pointer" }} />
            </a>
          </div>
        </div>
      </nav>

      <main style={{
        gridColumn: "2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        backgroundColor: "#1A2A44",
        color: "#fff",
      }}>
        <section style={{
          textAlign: "center",
          maxWidth: "600px",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}>
          <h2 style={{ fontSize: "2rem" }}>Lustrados Artigas</h2>
          <p>We provide high-quality polishing services to enhance the beauty and durability of your surfaces.</p>
          <button style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#D4A017",
            color: "#1A2A44",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}>Lea más</button>
        </section>
        <section style={{ textAlign: "center", marginTop: "40px" }}>
          <h3>Galería</h3>
          <img src="/gallery1.jpg" alt="Gallery Image" style={{ width: "300px", borderRadius: "10px", marginTop: "20px" }} />
        </section>
      </main>

      <footer style={{
        gridColumn: "1 / 3",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#1A2A44",
        color: "#D4A017",
      }}>
        TELÉFONO: 092 669 143 | Desde Artigas, Uruguay<br />
        © 2025 Lustrados Artigas. Todos los derechos reservados.
      </footer>
    </div>
  );
}
