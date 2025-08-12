import { FaInstagram, FaWhatsapp, FaHammer, FaEnvelope, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-[200px_1fr] bg-gradient-to-br from-neutral-100 via-sky-100 to-blue-200 text-gray-900 font-sans">
      
      {/* Sidebar */}
      <aside className="bg-white shadow-lg flex flex-col items-center py-6 gap-8 border-r border-gray-300">
        <img src="/logo.png" alt="Logo Lustrados" className="w-24" />
        <nav className="flex flex-col gap-6 text-lg font-semibold">
          <a href="#trabajos" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaHammer /> TRABAJOS
          </a>
          <a href="#contactos" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaEnvelope /> CONTACTOS
          </a>
          <a href="#resenas" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaStar /> RESEÑAS
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex flex-col justify-between px-10 py-6">
        
        {/* Header */}
        <header className="text-center text-4xl font-bold mb-8">
          LUSTRADOS Y CARPINTERÍA <br /> ARTIGAS
        </header>

        {/* Redes sociales */}
        <section className="flex justify-center items-center gap-12 mb-10">
          <a
            href="https://instagram.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:scale-110 transition-transform"
          >
            <FaInstagram size={80} />
          </a>
          <a
            href="https://wa.me/59892669143?text=Hola%20Lustrados%20Artigas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:scale-110 transition-transform"
          >
            <FaWhatsapp size={60} />
          </a>
        </section>

        {/* Secciones */}
        <section id="trabajos" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Nuestros Trabajos</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h3 className="font-semibold">Lijado y barnizado</h3>
              <p className="text-sm text-gray-600">Transformamos muebles con acabados brillantes.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h3 className="font-semibold">Restauración de puertas</h3>
              <p className="text-sm text-gray-600">Recuperamos la belleza original de la madera.</p>
            </div>
          </div>
        </section>

        <section id="contactos" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <p className="text-lg">📞 Teléfono: <strong>092 669 143</strong></p>
          <p className="text-lg">📧 Email: <strong>lustradosartigas@email.com</strong></p>
        </section>

        <section id="resenas" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Reseñas</h2>
          <div className="bg-white p-4 rounded shadow">
            <p className="italic">“Excelente trabajo, muy detallista y profesional.”</p>
            <p className="text-sm text-right mt-2">– Cliente satisfecho</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-lg font-semibold border-t pt-4">
          TELÉFONO: 092 669 143
        </footer>
      </main>
    </div>
  );
}
