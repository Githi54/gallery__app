import { useCallback, useState } from "react";
import { fetchApi } from "./api/api";
import { IMG } from "./types/Image";

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { ImagesList } from "./Components/Images.list";
import { Loader } from "./Components/Loader";



export function App() {
  const [images, setImages] = useState<IMG[]>([]);
  const [isClicked, setIsClicked] = useState(false);

  const loadPhoto = useCallback(async () => {
    setImages([]);
    setIsClicked(true);

    const data = await fetchApi();

    setImages(data.slice(0, 6));
  }, [])

  return (
    <div className="container mt-2">
      <div className="container">
        <button className="btn btn-primary btn-md" onClick={loadPhoto}>
          Load photo
        </button>
      </div>
      <br /><br />
      {!images.length && isClicked
        ? (
          <Loader />
        )
        : (
          <MDBContainer>
            <MDBRow>
              <MDBCol 
                lg={4} 
                md={12} 
                className='mb-4 mb-lg-0'
              >
                <ImagesList images={images.slice(0, 2)} />
              </MDBCol>

              <MDBCol lg={4} className='mb-4 mb-lg-0'>
                <ImagesList images={images.slice(2, 4)} />
              </MDBCol>

              <MDBCol 
                lg={4} 
                className='mb-4 mb-lg-0'
              >
                <ImagesList images={images.slice(4)} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        )}
    </div>
  );
}
