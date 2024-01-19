import "./Cast.css";

export const Cast = ({ actor }) => {
  return (
    <div className="cast">
      <div className="container">
        <img src={actor.img} alt={`Imagen del actor ${actor.name}`} />
      </div>
      <span>{actor.name} </span>
      <span>{actor.cast} </span>
    </div>
  );
};
