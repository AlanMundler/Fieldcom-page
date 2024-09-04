import Image from "next/image";
import Container from "react-bootstrap/Container";

type ManageCardProps = {
  id: number;
  imgUrl: string;
  title: string;
};

const ManageCard = ({ id, imgUrl, title }) => {
  return (
    <Container
  className="mt-4"
  data-aos={id === 1 ? "fade-right" : id === 2 ? "fade-down" : "fade-left"}
   // Usa flex para asegurar la altura completa
>
  <Image src={imgUrl} width={65} height={65} alt={title} className="mb-3" />
  <div className="d-flex flex-column justify-content-center text-center align-items-center gap-2">
    <h1 className="fs-1 fw-bold text-gray-900">{title}</h1>
    <p className="fs-6 fw-light text-gray-200">
          {id === 1
            ? "Garantizamos soluciones eléctricas seguras y eficientes para cualquier tipo de proyecto. Nuestro equipo de expertos se encarga de diseñar, instalar y mantener sistemas eléctricos que cumplen con los más altos estándares de calidad y seguridad. Desde instalaciones residenciales hasta industriales, aseguramos un suministro de energía confiable para impulsar tu negocio."
            : id === 2
            ? "Nos especializamos en ofrecer soluciones completas de telecomunicaciones que se adaptan a las necesidades específicas de cada cliente. Desde la instalación de infraestructura de red hasta la implementación de sistemas avanzados de comunicación, nuestro equipo se dedica a garantizar una conectividad rápida y confiable, para asegurar que tu empresa esté siempre conectada."
            : "Lleva tu negocio al siguiente nivel con nuestras soluciones en la nube. En Fieldcom, proporcionamos servicios de cloud computing que optimizan la gestión de datos y aplicaciones, ofreciendo escalabilidad, seguridad y accesibilidad desde cualquier lugar. Permítenos ayudarte a transformar digitalmente tu empresa con las mejores tecnologías en la nube."}
        </p>
      </div>
    </Container>
  );
};

export default ManageCard;
