import "./ImageCast.css";

export const ImageCast = ({ poster }: any) => {
  return (
    <div className="poster">
      <img
        className="poster"
        src={poster}
        alt={`Imagen del actor ${poster.name}`}
      />
    </div>
  );
};
