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
      className=" adn-card d-flex flex-column align-items-center justify-content-center"
      data-aos={"fade-down"}
    >
      <Image   src={imgUrl} width={40} height={40} alt={title} className="" />
      {id === 1 ?
      <div className="d-flex flex-column text-center gap-1">
        <h1 className="fs-6 fw-bold text-gray-900">{title}</h1>
       
      </div> : id === 2 ?
      
      <div className="d-flex flex-column text-center gap-1">
        <h1 className="fs-6 fw-bold text-gray-900">{title}</h1>
       </div>
        : id === 3 ?
      
       <div className="d-flex flex-column text-center gap-1">
         <h1 className="fs-6 fw-bold text-gray-900">{title}</h1>
        </div>
        : id === 4?
      
        <div className="d-flex flex-column text-center gap-1">
          <h1 className="fs-6 fw-bold text-gray-900">{title}</h1>
         </div>
         : id === 5 ?
      
         <div className="d-flex flex-column text-center gap-1">
           <h1 className="fs-6 fw-bold text-gray-900">{title}</h1>
          </div>
      :
      <div className="d-flex flex-column text-center gap-1">
        <h1 className="fs-6 fw-bold text-gray-900">{title}</h1>
      </div>
}
    </Container>
  );
};

export default ManageCard;
