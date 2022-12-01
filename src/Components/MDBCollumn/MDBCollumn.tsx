import { MDBCol } from "mdb-react-ui-kit";
import { IMG } from "../../types/Image";
import { ImagesList } from "../Images.list";

type Props = {
  images: IMG[];
};

export const MDBCollumn: React.FC<Props> = ({ images }) => (
  <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
    <ImagesList images={images} />
  </MDBCol>
);
