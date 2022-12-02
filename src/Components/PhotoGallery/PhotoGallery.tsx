import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { IMG } from "../../types/Image";
import { ImagesList } from "../Images.list";

type Props = {
  images: IMG[];
};

export const PhotoGallery: React.FC<Props> = ({ images }) => (
  <MDBContainer>
    <MDBRow>
      <MDBCol
        lg={4}
        md={12}
        className='mb-4 mb-lg-0'
      >
        <ImagesList images={images.slice(0, 2)} />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0 mh-50'>
        <ImagesList images={images.slice(2, 4)} />
      </MDBCol>

      <MDBCol
        lg={4}
        className='mb-4 mb-lg-0'
      >
        <ImagesList images={images.slice(4, 6)} />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);
