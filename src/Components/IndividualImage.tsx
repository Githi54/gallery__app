import { IMG } from "../types/Image";

type Props = {
  image: IMG
};

export const IndividualImage: React.FC<Props> = ({ image }) => {
  return (
    <div className="photo">
      <a href="/" >
        <img src={`${image.urls.small}`} alt="ikhjlj" />
      </a>
    </div>
  );
};
