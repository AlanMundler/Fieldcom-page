import Container from "react-bootstrap/Container";
import StatCard from "../components/StatCard";

const StatContent = [
  {
    title: "Miembros",
    value: "3",
    imgUrl: "/Stats/icon1.svg",
  },
  {
    title: "Proyectos",
    value: "0",
    imgUrl: "/Stats/icon4.svg",
  },
  {
    title: "Nacimiento",
    value: "27/8/24",
    imgUrl: "/Stats/icon3.svg",
  },
];

const Estadisticas = () => {
  return (
    <Container className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-start align-items-lg-center px-5 py-5 bg-silver">
      <div className="font-inter" data-aos="fade-right">
        <h1 className="text-gray-900 fw-semibold">
          Datos sobre&nbsp; <br />
          <span className="text-primary">Fieldcom.</span>
        </h1>
      </div>
      <div className="grid-container">
        {StatContent.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>
    </Container>
  );
};

export default Estadisticas;
