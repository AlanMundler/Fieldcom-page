import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "next/image";

const Pixelgrade = () => {
  return (
    <Container className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center px-5 my-5 bg-white">
      <Image
        src="/materiales.jpg"
        width={400}
        height={300}
        alt="pixelgrade"
        
        data-aos="fade-right"
      />
      <div className="sub-section font-inter" data-aos="fade-left">
        <h1 className="text-gray-900 fw-semibold lh-base">
          Que productos usamos&nbsp; <br/>
          en<span className="text-primary"> Fieldcom?</span>
        </h1>
        <p className="text-gray-200 fw-light fs-6">
        Estamos comprometidos con la excelencia en cada proyecto que realizamos. Por eso, utilizamos exclusivamente los mejores productos y tecnologías del mercado para garantizar resultados de la más alta calidad. Desde componentes eléctricos hasta soluciones de telecomunicaciones y cloud, cada uno de nuestros productos ha sido cuidadosamente seleccionado por su rendimiento, durabilidad y eficiencia. Con Fieldcom, no solo estás eligiendo un servicio de primera categoría, sino también la tranquilidad de saber que estás trabajando con lo mejor que la industria tiene para ofrecer.
        </p>
       
      </div>
    </Container>
  );
};

export default Pixelgrade;
