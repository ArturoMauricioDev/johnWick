import { ImageCast } from "./ImageCast";
import "./ImageCast.css";

export interface PropsTopImage {
  imgPoster: string;
}

export const Porter = ({ imgPoster }: any) => {
  console.log(imgPoster.imgPoster);
  return (
    <div className="ImageContainer">
      <ImageCast poster={imgPoster.imgPoster} />
    </div>
  );
};
