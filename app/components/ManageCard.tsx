import Image from "next/image";
import Container from "react-bootstrap/Container";

type ManageCardProps = {
  id: number;
  imgUrl: string;
  title: string;
};

const ManageCard = ({ id, imgUrl, title }: ManageCardProps) => {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center gap-3 py-2 px-6"
      data-aos={id === 1 ? "fade-right" : id === 2 ? "fade-down" : "fade-left"}
    >
      <Image src={imgUrl} width={65} height={65} alt={title} />
      {id === 1 ?
      <div className="d-flex flex-column text-center gap-1">
        <h1 className="fs-1 fw-bold text-gray-900">{title}</h1>
        <p className="fs-6 fw-light text-gray-200">
        Garantizamos soluciones eléctricas seguras y eficientes para cualquier tipo de proyecto. Nuestro equipo de expertos se encarga de diseñar, instalar y mantener sistemas eléctricos que cumplen con los más altos estándares de calidad y seguridad. Desde instalaciones residenciales hasta industriales, aseguramos un suministro de energía confiable para impulsar tu negocio.
        </p>
      </div> : id === 2 ?
      
      <div className="d-flex flex-column text-center gap-1">
        <h1 className="fs-1 fw-bold text-gray-900">{title}</h1>
        <p className="fs-6 fw-light text-gray-200">
        Ofrecemos servicios integrales de telecomunicaciones, diseñados para conectar a las personas y las empresas de manera eficiente y confiable. Implementamos infraestructura de red, sistemas de fibra óptica y soluciones de comunicación avanzada que garantizan la máxima conectividad. </p>
      </div>
      :
      <div className="d-flex flex-column text-center gap-1">
        <h1 className="fs-1 fw-bold text-gray-900">{title}</h1>
        <p className="fs-6 fw-light text-gray-200">
        Lleva tu negocio al siguiente nivel con nuestras soluciones en la nube. En Fieldcom, proporcionamos servicios de cloud computing que optimizan la gestión de datos y aplicaciones, ofreciendo escalabilidad, seguridad y accesibilidad desde cualquier lugar. Permítenos ayudarte a transformar digitalmente tu empresa con las mejores tecnologías en la nube. </p>
      </div>
}
    </Container>
  );
};

export default ManageCard;
