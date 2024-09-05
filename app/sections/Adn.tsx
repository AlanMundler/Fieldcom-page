import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import AdnCard from "../components/AdnCard";

const ManageContent = [
  {
    id: 1,
    title: "Innovación",
    imgUrl: "/adn-1.png",
    className: "adn-card",
  },
  {
    id: 2,
    title: "Espíritu Emprendedor",
    imgUrl: "/adn-2.png",
  },
  {
    id: 3,
    title: "Compromiso",
    imgUrl: "/adn-3.png",
  },
  {
    id: 3,
    title: "Certificación",
    imgUrl: "/adn-4.png",
  },
  {
    id: 3,
    title: "Agilidad & Dinamismo",
    imgUrl: "/adn-5.png",
  },
  {
    id: 3,
    title: "Pasión por nuestro trabajo",
    imgUrl: "/adn-6.png",
  },
];

const Adn = () => {
  return (
    <Container className="text-center font-inter  py-5">
      <div data-aos="fade-down">
        <p className="fs-1 lh-base text-gray-900 fw-bold">ADN</p>
        <p className="fs-1 lh-base text-primary fw-bold">Fieldcom.</p>
      </div>
      <div className="mt-4 d-flex flex-lg-row flex-column justify-content-between align-items-center">
        {ManageContent.map((card) => (
          <AdnCard key={card.id} {...card} />
        ))}
      </div>
    </Container>
  );
};

export default Adn;
