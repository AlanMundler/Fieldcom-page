import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <Container className=" d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center px-5 my-5 bg-silver border-1">
      <div className="font-inter mt-4" data-aos="fade-right">
        <h1 className="text-gray-900 fw-semibold">
        ¿Tenés un 
          <span className="text-primary"> Proyecto?</span>
        </h1>
        <p className="text-gray-200 fw-light fs-6">
        Contamos brevemente tu caso y nuestro equipo enviará una propuesta a tu medida.
        </p>
        <button className="custom-button">
  PEDIR PRESUPUESTO
</button>
      </div>
      <Image
        src="/HeroImg.png"
        alt="Hero"
        height={400}
        width={300}
        className=" h-auto w-auto mb-2 px-2 mt-4"
        priority={true}
        data-aos="fade-left"
      />
    </Container>
  );
};

export default Hero;
