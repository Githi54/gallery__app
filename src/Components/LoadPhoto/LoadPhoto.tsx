import { IMG } from "../../types/Image";

type Props = {
  loadPhoto: () => Promise<void>;
  images: IMG[]
};

export const LoadPhoto: React.FC<Props> = ({ loadPhoto, images}) => (
  <div className="container">
        <button 
          className="
            btn 
            btn-primary 
            btn-md
          " 
          onClick={loadPhoto}
          hidden={images.length > 0}
        >
          Load photo
        </button>
      </div>
);
