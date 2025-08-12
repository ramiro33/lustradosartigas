export default function Home() {
  return (
    <div className="grid grid-cols-[150px_1fr] grid-rows-[auto_1fr_auto] h-screen font-sans m-0">
      <nav className="border-r-2 border-black flex flex-col items-center pt-5 gap-8">
        <a href="/" title="Inicio">
          <img
            src="/logo.png"
            alt="Logo Lustrados"
            className="w-[150px] cursor-pointer transition-transform duration-300 hover:scale-110"
          />
        </a>

        {["TRABAJOS", "CONTACTOS", "RESEÑAS"].map((text, i) => (
          <a
            key={i}
            href={`/${text.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black text-[1.1rem] transition-all duration-300 hover:text-neutral-600 hover:scale-105"
          >
            {text}
          </a>
        ))}
      </nav>

      <header className="col-start-2 p-8 text-4xl font-bold text-center border-b-2 border-black">
        LUSTRADOS Y CARPINTERÍA<br />ARTIGAS
      </header>

      <main className="col-start-2 flex flex-col justify-center items-center gap-10">
        <div className="flex gap-14 items-center">
          <a
            href="https://instagram.com/tu_usuario_aqui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instagram.png"
              alt="Instagram Logo"
              className="w-[350px] cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          </a>

          <a
            href="https://wa.me/59892669143?text=Hola%20Lustrados%20Artigas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp.png"
              alt="Whatsapp Logo"
              className="w-[350px] cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>
      </main>

      <footer className="col-start-2 text-center p-5 text-xl font-bold">
        TELÉFONO: 092 669 143
      </footer>
    </div>
  );
}
