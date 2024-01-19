import "./Cast.css";

export const Cast = ({ actor }) => {
  return (
    <div className="cast">
      <div className="container">
        <img src={actor.img} alt={`Imagen del actor ${actor.name}`} />
      </div>
      <p>{actor.name} </p>
      <p>{actor.cast} </p>
    </div>
  );
};
