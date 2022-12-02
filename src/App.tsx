import { useCallback, useState } from "react";
import { fetchApi } from "./api/api";
import { IMG } from "./types/Image";

import 'bootstrap/dist/css/bootstrap.min.css';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import { Loader } from "./Components/Loader";
import { LoadPhoto } from "./Components/LoadPhoto";
import { PhotoGallery } from "./Components/PhotoGallery";

export function App() {
  const [images, setImages] = useState<IMG[]>([]);
  const [isClicked, setIsClicked] = useState(false);

  const loadPhoto = useCallback(async () => {
    setIsClicked(true);

    const data = await fetchApi();

    setImages(data);
  }, []);

  return (
    <div className="container mt-2">
      <LoadPhoto loadPhoto={loadPhoto} images={images} />
      <br /><br />
      {!images.length && isClicked
        ? (
          <Loader />
        )
        : (
          <PhotoGallery images={images.slice(0, 6)} />
        )}
    </div>
  );
}
