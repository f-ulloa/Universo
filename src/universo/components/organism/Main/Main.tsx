import { ChatBot } from "../../molecules/Chatbot/ChatBot";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <section className="welcome-section">
        <h2>¡Bienvenido a Universo Reclutamiento y Selección!</h2>
        <p>
          Somos líderes en el reclutamiento y la selección de capital humano,
          <br />
          ayudándote a encontrar los talentos que tu negocio necesita.
        </p>
      </section>

      <section className="servicios">
        <h2>Nuestros Servicios</h2>
        <ul>
          <li>Reclutamiento y selección de personal</li>
          <li>Pruebas psicométricas</li>
          <li>Análisis y descripción de puestos</li>
          <li>Formación y desarrollo de personal</li>
        </ul>
      </section>

      <section className="mision">
        <h2>Misión</h2>
        <p>
          proveemos servicios relacionados con el manejo de reclutamiento y
          selección simplificando la operación y aumentando la eficiencia en los
          procesos de nuestros clientes, optimizando los tiempos y garantizando
          una excelente calidad.
        </p>
      </section>

      <section className="vision">
        <h2>Visión</h2>
        <p>
          Nuestra visión es expandirnos a nivel nacional y posicionarnos como
          una de las mejores agencias de reclutamiento y selección, así poder
          lograr pasar de una agencia pequeña a mediana.
        </p>
      </section>

      <section className="valores">
        <h2>Nuestros valores</h2>
        <ul>
          <li>Transparencia</li>
          <li>Liderazgo</li>
          <li>Lealtad</li>
          <li>Confianza</li>
          <li>Honestidad</li>
        </ul>
      </section>

      <ChatBot />
    </main>
  );
};
