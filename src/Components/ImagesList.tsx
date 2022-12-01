import { IMG } from "../types/Image";
import { IndividualImage } from "./IndividualImage";

type Props = {
  images: IMG[]
};

export const ImagesList: React.FC<Props> = ({ images }) => {
  return images.map((image: IMG) => (
        <IndividualImage key={image.id} image={image} />
      ));
};
