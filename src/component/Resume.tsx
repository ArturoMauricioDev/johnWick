import "./Description.css";
import { DescriptionCast } from "./DescriptionCast";

export const Resume = ({ movie }: any) => {
  const textMovie = movie.synopsis;
  return (
    <div className="descriptionContainer">
      <DescriptionCast resume={textMovie} />
    </div>
  );
};
