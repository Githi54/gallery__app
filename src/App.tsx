import { useCallback, useState } from "react";
import { fetchApi } from "./api/api";
import { ImagesList } from "./Components/ImagesList";
import { IMG } from "./types/Image";
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  const [images, setImages] = useState<IMG[]>([]);

  const loadPhoto = useCallback(async () => {
    const data = await fetchApi();

    setImages(data);
  }, [])

  return (
    <div className="container">
      <br />
      <button className="btn btn-primary btn-md" onClick={loadPhoto}>Load photo</button>
      <br /><br />
      <div className="photos">
      {images.length > 0 && (
      <ImagesList images={images} />
    )}
      </div>
    </div>
  );
}
