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
      data-aos={"fade-down"}
    >
      <Image src={imgUrl} width={35} height={35} alt={title} />
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
