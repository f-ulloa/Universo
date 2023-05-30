import { Link } from "../../atoms/Link/Link";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <img src="/logo.jpeg" alt="Logo de Universo Reclutamiento y Selección" />
      <h1>Universo Reclutamiento y Selección</h1>
      <nav>
        <ul>
          <Link href="/about" textRef="Acerca de" />
          <Link href="/services" textRef="Servicios" />
          <Link href="/contact" textRef="Contacto" />
        </ul>
      </nav>
    </header>
  );
};
