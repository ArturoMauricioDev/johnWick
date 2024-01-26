import { Cast } from "./Cast";
import "./TopCast.css";

export const TopCast = ({ movie }: any) => {
  const characters = movie.characters;
  return (
    <div>
      <div className="TopCast">
        <h3>Top Cast</h3>
      </div>
      <div className="Actors">
        {characters.map((actor: any) => (
          <Cast actor={actor} />
        ))}
      </div>
    </div>
  );
};
