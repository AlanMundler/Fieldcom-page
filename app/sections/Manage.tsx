import Container from "react-bootstrap/Container";
import ManageCard from "../components/ManageCard";

const ManageContent = [
  {
    id: 1,
    title: "Electricidad",
    imgUrl: "/Features/icon1.svg",
  },
  {
    id: 2,
    title: "Telecomunicaciones",
    imgUrl: "/Features/icon2.svg",
  },
  {
    id: 3,
    title: "Cloud",
    imgUrl: "/Features/icon3.svg",
  },
];

const Manage = () => {
  return (
    <Container className="text-center font-inter bg-white py-5">
      <div data-aos="fade-down">
        <h1 className="fs-1 lh-base text-gray-900 fw-bold">
          Productos
        </h1>
        <p className="text-gray-200 fw-light fs-6 mt-4">
          Que podes encontrar de nosotros?
        </p>
      </div>
      <div className="mt-4 d-flex flex-lg-row flex-column justify-content-between align-items-center">
        {ManageContent.map((card) => (
          <ManageCard key={card.id} {...card} />
        ))}
      </div>
    </Container>
  );
};

export default Manage;
