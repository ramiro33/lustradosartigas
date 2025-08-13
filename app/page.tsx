'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
    setIsLoggedIn(true);
  };

  const handleLoginOpen = () => setShowLogin(true);

  const handleLoginClose = (e: React.MouseEvent) => {
    setShowLogin(false);
  };

  const testimonials = [
    { text: 'Excelente trabajo en el lustrado de mis muebles antiguos. ¡Quedaron como nuevos!', author: 'Cliente Satisfecho 1' },
    { text: 'Profesionales y puntuales. Recomiendo sus servicios de carpintería.', author: 'Cliente Satisfecho 2' },
    { text: 'Gran atención al detalle en cada proyecto. ¡Volveré por más!', author: 'Cliente Satisfecho 3' },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "250px 1fr",
      gridTemplateRows: "auto 1fr auto",
      height: "100vh",
      fontFamily: "'Roboto', sans-serif",
      margin: 0,
      background: "linear-gradient(to bottom, #1A2A44, #0A142A)",
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
        </div>
        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={{ color: "#D4A017", textDecoration: "none", fontWeight: "bold", transition: "color 0.3s", border: "1px solid black", background: "transparent", padding: "5px 15px", borderRadius: "5px" }} 
            onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} 
            onMouseLeave={(e) => e.currentTarget.style.color = "#D4A017"}>Inicio</a>
          <a href="/resenas" style={{ color: "#D4A017", textDecoration: "none", fontWeight: "bold", transition: "color 0.3s", border: "1px solid black", background: "transparent", padding: "5px 15px", borderRadius: "5px" }} 
            onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} 
            onMouseLeave={(e) => e.currentTarget.style.color = "#D4A017"}>Opiniones</a>
          <a href="/servicio" style={{ color: "#D4A017", textDecoration: "none", fontWeight: "bold", transition: "color 0.3s", border: "1px solid black", background: "transparent", padding: "5px 15px", borderRadius: "5px" }} 
            onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} 
            onMouseLeave={(e) => e.currentTarget.style.color = "#D4A017"}>Servicio</a>
          <a href="/galeria" style={{ color: "#D4A017", textDecoration: "none", fontWeight: "bold", transition: "color 0.3s", border: "1px solid black", background: "transparent", padding: "5px 15px", borderRadius: "5px" }} 
            onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} 
            onMouseLeave={(e) => e.currentTarget.style.color = "#D4A017"}>Galería</a>
          {isLoggedIn ? (
            <img src="/avatar.png" alt="Avatar" style={{ width: 40, height: 40, borderRadius: "50%", cursor: "pointer", transition: "transform 0.3s" }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} 
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
          ) : (
            <button onClick={handleLoginOpen} style={{
              color: "#D4A017",
              border: "1px solid black",
              background: "transparent",
              padding: "5px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "color 0.3s, transform 0.3s",
            }} 
            onMouseEnter={(e) => { e.currentTarget.style.color = "#FFD700"; e.currentTarget.style.transform = "scale(1.05)"; }} 
            onMouseLeave={(e) => { e.currentTarget.style.color = "#D4A017"; e.currentTarget.style.transform = "scale(1)"; }}>Login</button>
          )}
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
          <a href="/trabajos" style={{ color: "#fff", textDecoration: "none", fontSize: "1.2rem", padding: "15px 40px", backgroundColor: "#8B4513", borderRadius: "5px", transition: "color 0.3s, background-color 0.3s" }} 
            onMouseEnter={(e) => { e.currentTarget.style.color = "#FFD700"; e.currentTarget.style.backgroundColor = "#A0522D"; }} 
            onMouseLeave={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.backgroundColor = "#8B4513"; }}>Proyectos</a>
          <a href="/contactos" style={{ color: "#fff", textDecoration: "none", fontSize: "1.2rem", padding: "15px 40px", backgroundColor: "#8B4513", borderRadius: "5px", transition: "color 0.3s, background-color 0.3s" }} 
            onMouseEnter={(e) => { e.currentTarget.style.color = "#FFD700"; e.currentTarget.style.backgroundColor = "#A0522D"; }} 
            onMouseLeave={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.backgroundColor = "#8B4513"; }}>Asistencia</a>
          <a href="/presupuestos" style={{ color: "#fff", textDecoration: "none", fontSize: "1.2rem", padding: "15px 40px", backgroundColor: "#8B4513", borderRadius: "5px", transition: "color 0.3s, background-color 0.3s" }} 
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
        gap: "40px",
        padding: "40px",
        backgroundColor: "transparent",
        color: "#fff",
        overflowY: "auto",
      }}>
        {/* Hero Section */}
        <section style={{ width: "100%", textAlign: "center", background: "url(/hero-wood.jpg) no-repeat center/cover", padding: "60px 0", color: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
          <h2 style={{ fontSize: "2rem" }}>Bienvenido a Lustrados Artigas</h2>
          <p>Transformamos madera en obras de arte. Descubre nuestros servicios únicos.</p>
          <button style={{
            marginTop: "20px",
            padding: "15px 30px",
            border: "1px solid black",
            background: "transparent",
            color: "#D4A017",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "color 0.3s, transform 0.3s",
          }} onMouseEnter={(e) => { e.currentTarget.style.color = "#FFD700"; e.currentTarget.style.transform = "rotate(5deg)"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "#D4A017"; e.currentTarget.style.transform = "rotate(0)"; }}>
            Explorar Servicios
          </button>
        </section>

        {/* Services Section */}
        <section style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          <div style={{ padding: "20px", background: "rgba(255,255,255,0.1)", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <h3>Lustrado de Muebles</h3>
            <p>Restauramos el brillo natural de tus muebles con técnicas artesanales.</p>
          </div>
          <div style={{ padding: "20px", background: "rgba(255,255,255,0.1)", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <h3>Carpintería Personalizada</h3>
            <p>Diseñamos y construimos piezas únicas a medida.</p>
          </div>
          <div style={{ padding: "20px", background: "rgba(255,255,255,0.1)", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <h3>Reparaciones</h3>
            <p>Arreglamos daños en madera con expertise profesional.</p>
          </div>
        </section>

        {/* About Section */}
        <section style={{ width: "100%", textAlign: "center", padding: "30px", background: "rgba(244,164,96,0.2)", borderRadius: "10px", color: "#fff" }}>
          <h2>Sobre Nosotros</h2>
          <p>Somos un equipo apasionado por la madera, ubicado en Artigas, Uruguay. Con años de experiencia, ofrecemos servicios de alta calidad en lustrado y carpintería.</p>
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
              border: "1px solid black",
              background: "transparent",
              color: "#D4A017",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "color 0.3s, box-shadow 0.3s",
            }} onMouseEnter={(e) => { e.currentTarget.style.color = "#FFD700"; e.currentTarget.style.boxShadow = "0 0 10px #FFD700"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "#D4A017"; e.currentTarget.style.boxShadow = "none"; }}>
              Enviar
            </button>
          </form>
          {submitted && <p style={{ color: "green", marginTop: "10px" }}>¡Mensaje enviado con éxito!</p>}
        </section>

        {/* Gallery Section */}
        <section style={{ width: "100%", textAlign: "center" }}>
          <button onClick={() => setShowGallery(!showGallery)} style={{
            padding: "10px 20px",
            border: "1px solid black",
            background: "transparent",
            color: "#D4A017",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "color 0.3s, transform 0.3s",
          }} onMouseEnter={(e) => { e.currentTarget.style.color = "#FFD700"; e.currentTarget.style.transform = "translateY(-5px)"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "#D4A017"; e.currentTarget.style.transform = "translateY(0)"; }}>
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

        {/* Testimonials Section */}
        <section style={{ width: "100%", textAlign: "center", padding: "30px", background: "rgba(210,180,140,0.2)", borderRadius: "10px", color: "#fff" }}>
          <h2>Testimonios</h2>
          <p style={{ fontStyle: "italic" }}>"{testimonials[currentTestimonial].text}"</p>
          <p>- {testimonials[currentTestimonial].author}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "10px" }}>
            <button onClick={prevTestimonial} style={{
              padding: "5px 10px",
              border: "1px solid black",
              background: "transparent",
              color: "#D4A017",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "color 0.3s",
            }} onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} onMouseLeave={(e) => e.currentTarget.style.color = "#D4A017"}>
              Anterior
            </button>
            <button onClick={nextTestimonial} style={{
              padding: "5px 10px",
              border: "1px solid black",
              background: "transparent",
              color: "#D4A017",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "color 0.3s",
            }} onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} onMouseLeave={(e) => e.currentTarget.style.color = "#D4A017"}>
              Siguiente
            </button>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section style={{ width: "100%", maxWidth: "600px", textAlign: "center" }}>
          <h2>Suscríbete a Nuestro Newsletter</h2>
          <p>Recibe actualizaciones sobre nuevos servicios y ofertas especiales.</p>
          <input type="email" placeholder="Tu Email" style={{ padding: "10px", width: "70%", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }} />
          <button style={{
            padding: "10px 20px",
            border: "1px solid black",
            background: "transparent",
            color: "#D4A017",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "color 0.3s, opacity 0.3s",
          }} onMouseEnter={(e) => { e.currentTarget.style.color = "#FFD700"; e.currentTarget.style.opacity = "0.8"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "#D4A017"; e.currentTarget.style.opacity = "1"; }}>
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
          <p>Consejos para mantener tus muebles lustrados. <a href="/blog" style={{ color: "#D4A017", textDecoration: "underline" }}>Leer más</a></p>
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
        }} onClick={handleLoginClose}>
          <div style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            width: "300px",
            color: "#1A2A44",
            position: "relative",
          }}>
            <button className="close-button" onClick={handleLoginClose} style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}>×</button>
            <h2 style={{ textAlign: "center" }}>Iniciar Sesión</h2>
            <form onSubmit={handleLoginSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input type="text" name="username" placeholder="Usuario" value={loginData.username} onChange={handleLoginInputChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
              <input type="email" name="email" placeholder="Correo Electrónico" value={loginData.email} onChange={handleLoginInputChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
              <input type="password" name="password" placeholder="Contraseña" value={loginData.password} onChange={handleLoginInputChange} required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
              {loginError && <p style={{ color: "red", margin: "5px 0" }}>{loginError}</p>}
              <button type="submit" style={{
                padding: "10px",
                border: "1px solid black",
                background: "transparent",
                color: "#D4A017",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "color 0.3s",
              }} 
              onMouseEnter={(e) => e.currentTarget.style.color = "#FFD700"} 
              onMouseLeave={(e) => e.currentTarget.style.color = "#D4A017"}>Iniciar Sesión</button>
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
