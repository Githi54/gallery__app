import { useCallback, useState } from "react";
import { fetchApi } from "./api/api";
import { Image } from "./types/Image";

export function App() {
  const [images, setImages] = useState<Image[]>([]);

  const loadPhoto = useCallback(async () => {
    const data = await fetchApi();

    setImages(data.slice(0, 5));
  }, [])

  return (
    <>
    <h1>Hello world!</h1>
    <button onClick={loadPhoto}>Load photo</button>
    {images.length > 0 && images.map(image => (
      <img src={image.urls.small} alt="dfa" />
    ))}
    </>
  );
}
