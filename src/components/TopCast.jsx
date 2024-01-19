import { Cast } from "./Cast";

import cast from "../assets/cast.json";
import "./TopCast.css";

export const TopCast = () => {
  return (
    <div className="top-cast">
      <div>
        <h3>Top Cast</h3>
      </div>
      <div className="actors">
        {cast.map((actor) => (
          <Cast actor={actor} />
        ))}
      </div>
    </div>
  );
};
