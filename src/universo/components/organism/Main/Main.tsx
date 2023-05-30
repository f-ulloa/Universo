import { ChatBot } from "../../molecules/Chatbot/ChatBot";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <section className="welcome-section">
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
      <ChatBot />
    </main>
  );
};
