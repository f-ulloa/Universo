import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="information">
        <div>
          <p>
            Ubicación Agencia:
            <br /> Avenida Providencia 415, Comuna Providencia
          </p>
          <p>
            Horario 1:
            <br />
            9 am a 18:00 pm
            <br />
            (Reclutadores, psicólogos, seleccionadores,
            <br />
            personal de aseo, secretarios)
          </p>
          <p>
            Horario 2:
            <br />
            Trabajan en turnos 4x4
            <br />
            - 7:00 am hasta 19:00 pm
            <br />
            - 19:00 pm hasta las 7:00 am
            <br />
            (Seguridad)
          </p>
        </div>
      </div>

      <div className="copyright">
        <p>
          © 2023 Universo Reclutamiento y Selección. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
