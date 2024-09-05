import Container from "react-bootstrap/Container";
import Image from "next/image";

const Nosotros = () => {
  return (
    <Container className="text-center py-5 bg-white">
      <div className="font-inter" data-aos="fade-down">
        <h1 className="text-gray-900 fs-1 fw-bold">Nosotros</h1>
        <p className="text-gray-200 fw-light fs-5 mt-4">
          En Fieldcom, lideramos proyectos eléctricos y de telecomunicaciones,
          <br />
          desde la planificación hasta la implementación, a cualquier escala.
          <br /> <br />
          Ofrecemos soluciones eficientes y sostenibles para empresas y hogares,
          <br /> comprometidos con un futuro más verde y conectado para todos.
        </p>
      </div>
    </Container>
  );
};

export default Nosotros;
