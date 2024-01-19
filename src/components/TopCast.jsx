import { Cast } from "./Cast";
import cast from "../assets/cast.json";

export const TopCast = () => {
  return (
    <div>
      {cast.map((actor) => (
        <Cast actor={actor} />
      ))}
    </div>
  );
};
