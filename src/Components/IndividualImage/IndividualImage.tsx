import { IMG } from "../../types/Image";

type Props = {
  image: IMG;
};

export const IndividualImage: React.FC<Props> = ({ image }) => {
  return (
      <a href={image.urls.small}>
        <img src={`${image.urls.small}`} alt={`${image.user.name}`} className='w-100 shadow-1-strong rounded mb-4' />
      </a>
  );
};
