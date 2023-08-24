import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function Searcher() {
  const [movie, setMovie] = useState([]);
  let uRef = React.createRef();
  const handlerClick = () => {
    axios
      .get(
        "http://www.omdbapi.com/?s=" + uRef.current.value + "&apikey=4b38bf9d"
      )
      .then((response) => {
        setMovie(response.data.Search);
      });
  };
  return (
    <div className="App">
      <div>
        <form onSubmit={handlerClick}>
          <label htmlFor="film">Введите название фильма</label>
          <input type="text" name="film" id="name" ref={uRef} />
          <input type="submit" value="Найти" />
        </form>
      </div>
      {movie.map((value, index) => {
        return (
          <>
            <h3 key={index}>{value.Title}</h3>
            <img src={value.Poster} key={index} alt="" />
            <h6 key={index}>{value.Year}</h6>
          </>
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Searcher />
    </div>
  );
}
