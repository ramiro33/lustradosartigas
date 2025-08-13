'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', email: '', password: '' });
  const [loginError, setLoginError] = useState('');

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

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.password.length < 8) {
      setLoginError('La contraseña debe tener al menos 8 caracteres');
      return;
    }
    if (!loginData.username || !loginData.email) {
      setLoginError('El usuario y el correo son obligatorios');
      return;
    }
    console.log('Login successful:', loginData);
    setLoginError('');
    setShowLogin(false);
  };

  const handleLoginOpen = () => setShowLogin(true);
  const handleLoginClose = (e: React.KeyboardEvent | MouseEvent) => {
    if (e instanceof KeyboardEvent && e.key === 'Escape') setShowLogin(false);
    if (e instanceof MouseEvent && (e.target as HTMLElement).className === 'modal') setShowLogin(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleLoginClose as any);
    return () => document.removeEventListener('keydown', handleLoginClose as any);
  }, []);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "250px 1fr",
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
          <img src="/logo.png" alt="Logo Lustrados Artigas" style={{ width: 50, marginRight: "10px", transition: "transform 0.3s ease" }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} 
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
          <h1 style={{ fontSize: "1.5rem", margin: 0, transition: "color 0.3s" }} 
            onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} 
            onMouseLeave={(e) => e.currentTarget.style.color = "#D4A017"}>LUSTRADOS ARTIGAS</h1>
        </div>
        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={{ color: "#D4A017", textDecoration: "none", fontWeight: "bold", transition: "color 0.3s" }} 
            onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} 
            onMouseLeave={(e) => e.currentTarget.style.color = "#D4A017"}>Inicio</a>
          <a href="/resenas" style={{ color: "#D4A017", textDecoration: "none", fontWeight: "bold", transition: "color 0.3s" }} 
            onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} 
            onMouseLeave={(e) => e.currentTarget.style.color = "#D4A017"}>Opiniones</a>
          <a href="/servicio" style={{ color: "#D4A017", textDecoration: "none", fontWeight: "bold", transition: "color 0.3s" }} 
            onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} 
            onMouseLeave={(e) => e.currentTarget.style.color = "#D4A017"}>Servicio</a>
          <a href="/galeria" style={{ color: "#D4A017", textDecoration: "none", fontWeight: "bold", transition: "color 0.3s" }} 
            onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} 
            onMouseLeave={(e) => e.currentTarget.style.color = "#D4A017"}>Galería</a>
          <button onClick={handleLoginOpen} style={{
            backgroundColor: "#D4A017",
            color: "#1A2A44",
            border: "none",
            padding: "5px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s, transform 0.3s",
          }} 
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#FFD700"; e.currentTarget.style.transform = "scale(1.05)"; }} 
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#D4A017"; e.currentTarget.style.transform = "scale(1)"; }}>Login</button>
        </nav>
      </header>

      <nav style={{
        gridColumn: "1",
        borderRight: "2px solid #D4A017",
        padding: "20px",
        backgroundColor: "#1A2A44",
        color: "#fff",
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
          <a href="/trabajos" style={{ color: "#fff", textDecoration: "none", fontSize: "1.2rem", padding: "15px 30px", backgroundColor: "#8B4513", borderRadius: "5px", transition: "color 0.3s, background-color 0.3s" }} 
            onMouseEnter={(e) => { e.currentTarget.style.color = "#FFD700"; e.currentTarget.style.backgroundColor = "#A0522D"; }} 
            onMouseLeave={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.backgroundColor = "#8B4513"; }}>Proyectos</a>
          <a href="/contactos" style={{ color: "#fff", textDecoration: "none", fontSize: "1.2rem", padding: "15px 30px", backgroundColor: "#8B4513", borderRadius: "5px", transition: "color 0.3s, background-color 0.3s" }} 
            onMouseEnter={(e) => { e.currentTarget.style.color = "#FFD700"; e.currentTarget.style.backgroundColor = "#A0522D"; }} 
            onMouseLeave={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.backgroundColor = "#8B4513"; }}>Asistencia</a>
          <a href="/presupuestos" style={{ color: "#fff", textDecoration: "none", fontSize: "1.2rem", padding: "15px 30px", backgroundColor: "#8B4513", borderRadius: "5px", transition: "color 0.3s, background-color 0.3s" }} 
            onMouseEnter={(e) => { e.currentTarget.style.color = "#FFD700"; e.currentTarget.style.backgroundColor = "#A0522D"; }} 
            onMouseLeave={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.backgroundColor = "#8B4513"; }}>Presupuestos</a>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <a href="https://facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer" style={{ transition: "transform 0.3s" }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"} 
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
              <img src="/Facebook.png" alt="Facebook Logo" style={{ width: 30, cursor: "pointer" }} />
            </a>
            <a href="https://instagram.com/tu_usuario_aqui" target="_blank" rel="noopener noreferrer" style={{ transition: "transform 0.3s" }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"} 
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
              <img src="/instagram.png" alt="Instagram Logo" style={{ width: 30, cursor: "pointer" }} />
            </a>
            <a href="https://wa.me/59892669143?text=Hola%20Lustrados%20Artigas" target="_blank" rel="noopener noreferrer" style={{ transition: "transform 0.3s" }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"} 
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
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
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
          <h2 style={{ fontSize: "2rem", transition: "color 0.3s" }} 
            onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} 
            onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}>Lustrados Artigas</h2>
          <p style={{ transition: "color 0.3s" }} 
            onMouseEnter={(e) => e.currentTarget.style.color = "#D4A017"} 
            onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}>We provide high-quality polishing services to enhance the beauty and durability of your surfaces.</p>
          <button style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#D4A017",
            color: "#1A2A44",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s, transform 0.3s",
          }} 
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#FFD700"; e.currentTarget.style.transform = "scale(1.05)"; }} 
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#D4A017"; e.currentTarget.style.transform = "scale(1)"; }}>Lea más</button>
        </section>
        <section style={{ textAlign: "center", marginTop: "40px" }}>
          <h3 style={{ transition: "color 0.3s" }} 
            onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} 
            onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}>Galería</h3>
          <img src="/gallery1.jpg" alt="Gallery Image" style={{ width: "300px", borderRadius: "10px", marginTop: "20px", transition: "transform 0.3s" }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} 
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
        </section>
      </main>

      {showLogin && (
        <div className="modal" style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }} onClick={handleLoginClose} onKeyDown={handleLoginClose as any}>
          <div style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            width: "300px",
            color: "#1A2A44",
          }}>
            <h2 style={{ textAlign: "center" }}>Iniciar Sesión</h2>
            <form onSubmit={handleLoginSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input type="text" name="username" placeholder="Usuario" value={loginData.username} onChange={handleLoginInputChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
              <input type="email" name="email" placeholder="Correo Electrónico" value={loginData.email} onChange={handleLoginInputChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
              <input type="password" name="password" placeholder="Contraseña" value={loginData.password} onChange={handleLoginInputChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
              {loginError && <p style={{ color: "red", margin: "5px 0" }}>{loginError}</p>}
              <button type="submit" style={{
                padding: "10px",
                backgroundColor: "#D4A017",
                color: "#1A2A44",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#FFD700"} 
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#D4A017"}>Iniciar Sesión</button>
            </form>
          </div>
        </div>
      )}

      <footer style={{
        gridColumn: "1 / 3",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#1A2A44",
        color: "#D4A017",
        transition: "opacity 0.3s",
      }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
      onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}>
        TELÉFONO: 092 669 143 | Desde Artigas, Uruguay<br />
        © 2025 Lustrados Artigas. Todos los derechos reservados.
      </footer>
    </div>
  );
}
