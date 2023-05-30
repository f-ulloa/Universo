import "./App.css";

function App() {
  return (
    <div id="homepage">
      <header>
        <img
          src="public/logo.jpeg"
          alt="Logo de Universo Reclutamiento y Selección"
        />
        <h1>Universo Reclutamiento y Selección</h1>
        <nav>
          <ul>
            <li>
              <a href="/about">Acerca de</a>
            </li>
            <li>
              <a href="/services">Servicios</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>¡Bienvenido a Universo Reclutamiento y Selección!</h2>
          <p>
            Somos líderes en el reclutamiento y la selección de capital humano,
            ayudándote a encontrar los talentos que tu negocio necesita.
          </p>
        </section>

        <section>
          <h2>Nuestros Servicios</h2>
          <ul>
            <li>Reclutamiento y selección de personal</li>
            <li>Pruebas psicométricas</li>
            <li>Análisis y descripción de puestos</li>
            <li>Formación y desarrollo de personal</li>
            // Incluye aquí otros servicios
          </ul>
        </section>
        <div className="chatbot">
          <img src="public/LogoChatBot.png" alt="Chat con nosotros" />
          <span>¿Necesitas ayuda?</span>
        </div>
      </main>

      <footer>
        <p>
          © 2023 Universo Reclutamiento y Selección. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
