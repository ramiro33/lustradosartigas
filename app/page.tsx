import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-[160px_1fr] grid-rows-[auto_1fr_auto] bg-gradient-to-br from-sky-100 via-white to-blue-100 text-gray-900 font-sans">

      {/* Sidebar */}
      <aside className="flex flex-col items-center py-6 gap-10 bg-white shadow-md border-r border-gray-300">
        <img
          src="/logo.png"
          alt="Logo Lustrados"
          className="w-24 hover:scale-105 transition-transform"
        />
        <nav className="flex flex-col gap-4 w-full px-4">
          {["TRABAJOS", "CONTACTOS", "RESEÑAS"].map((text, i) => (
            <a
              key={i}
              href={`#${text.toLowerCase()}`}
              className="block text-center font-semibold text-lg py-2 rounded bg-blue-50 hover:bg-blue-100 hover:scale-105 transition-all shadow"
            >
              {text}
            </a>
          ))}
        </nav>
      </aside>

      {/* Header */}
      <header className="col-start-2 p-6 text-center border-b border-gray-300">
        <h1 className="text-4xl font-bold tracking-wide">
          LUSTRADOS Y CARPINTERÍA <br /> ARTIGAS
        </h1>
      </header>

      {/* Main content */}
      <main className="col-start-2 flex flex-col items-center justify-center gap-10 py-10 px-6">

        {/* Redes sociales */}
        <div className="flex gap-12 items-center">
          <a
            href="https://instagram.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:scale-110 transition-transform"
          >
            <FaInstagram size={100} />
          </a>
          <a
            href="https://wa.me/59892669143?text=Hola%20Lustrados%20Artigas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:scale-110 transition-transform"
          >
            <FaWhatsapp size={60} />
          </a>
        </div>

        {/* Línea divisoria decorativa */}
        <div className="w-full h-px bg-gray-300" />

        {/* Sección de ejemplo para expansión futura */}
        <section className="grid grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">Lijado y barnizado</h2>
            <p className="text-sm text-gray-600">Acabados brillantes y duraderos para tus muebles.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">Restauración de puertas</h2>
            <p className="text-sm text-gray-600">Recuperamos la belleza original de la madera.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="col-start-2 text-center py-4 text-lg font-semibold border-t border-gray-300">
        TELÉFONO: 092 669 143
      </footer>
    </div>
  );
}

