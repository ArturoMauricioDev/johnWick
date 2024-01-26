import "./Chip.css";
import { ChipCast } from "./ChipCast";

export const Chip = ({ categories }: any) => {
  const movieCategories = categories.category;
  return (
    <div className="ChipContainer">
      {movieCategories.map((category: string) => (
        <ChipCast category={category} />
      ))}
    </div>
  );
};
