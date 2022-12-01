import { IMG } from "../../types/Image";
import { IndividualImage } from "../IndividualImage/IndividualImage";
import LightGallery from 'lightgallery/react';

import lgZoom from 'lightgallery/plugins/zoom';

type Props = {
  images: IMG[]
};

export const ImagesList: React.FC<Props> = ({ images }) => {
  return (
      <LightGallery
        plugins={[lgZoom]}
      >
        {images.map(image => (
          <IndividualImage key={image.id} image={image} />
        ))}
      </LightGallery>
  );
};
