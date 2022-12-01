import { IMG } from "../types/Image";

type Props = {
  image: IMG;
  images: IMG[];
};

export const IndividualImage: React.FC<Props> = ({ image, images }) => {
  console.log(image);

  return (
      <a href={image.urls.small}>
        <img src={`${image.urls.small}`} alt={`${image.user.name}`} />
      </a>
  );
};
