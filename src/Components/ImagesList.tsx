import { IMG } from "../types/Image";
import { IndividualImage } from "./IndividualImage";
import LightGallery from 'lightgallery/react';

import lgZoom from 'lightgallery/plugins/zoom';

type Props = {
  images: IMG[]
};

export const ImagesList: React.FC<Props> = ({ images }) => {
  return (
    <LightGallery
      elementClassNames="custom-wrapper-class"
      plugins={[lgZoom]}
    >
      {images.map(image => {

        return (
          <IndividualImage key={image.id} image={image} images={images} />
        )
      })}
    </LightGallery>
  );
};
