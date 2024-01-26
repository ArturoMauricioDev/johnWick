import { useEffect, useState } from "react";
import { ButtonTicket } from "./component/ButtonTicket";
import { Chip } from "./component/Chip";
import { Resume } from "./component/Resume";
import { TopCast } from "./component/TopCast";
import { Porter } from "./component/Porter";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://65b16416d16d31d11bded201.mockapi.io/api/v1/movies")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setMovies(data);
      });
  }, []);

  if (!movies.length) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Porter imgPoster={movies[0]} />
      <Chip categories={movies[0]} />
      <Resume movie={movies[0]} />
      <TopCast movie={movies[0]} />
      <ButtonTicket />
    </>
  );
}

export default App;
