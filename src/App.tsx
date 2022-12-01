import { useCallback, useState } from "react";
import { fetchApi } from "./api/api";
import { IMG } from "./types/Image";

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  MDBRow,
} from 'mdb-react-ui-kit';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { MDBCollumn } from "./Components/MDBCollumn/MDBCollumn";



export function App() {
  const [images, setImages] = useState<IMG[]>([]);

  const loadPhoto = useCallback(async () => {
    const data = await fetchApi();

    setImages(data.slice(0, 6));
  }, [])

  return (
    // <div className="container">
    //   <br />
    //   <button className="btn btn-primary btn-md" onClick={loadPhoto}>Load photo</button>
    //   <br /><br />
    //   <div className="photos">
    //   {images.length > 0 && (
    //   <ImagesList images={images} />
    // )}
    //   </div>
    // </div>
    <div className="container">
      <button className="btn btn-primary btn-md" onClick={loadPhoto}>Load photo</button>
      <br /><br />

      {images.length > 0 && (
        <MDBRow>
          <MDBCollumn images={images.slice(0, 2)} />
          <MDBCollumn images={images.slice(2, 4)} />
          <MDBCollumn images={images.slice(4)} />
        </MDBRow>
      )}
    </div>
  );
}

// {images.length > 0 && (
//         <ImagesList images={images} />
//       )}
