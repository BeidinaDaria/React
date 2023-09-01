import React,{useState} from "react";
import axios from 'axios';
import './App.css';

const Movies = () => {
  const [movies,setMovies] = useState([]);
  const getMovies = () => {
    axios.get("http://www.omdbapi.com/?s=" + movies + "&apikey=4b38bf9d&type=movie")
    .then((res)=>{
      if (res){
        console.log(res.data);
      }
    })
  }
  const handle = (e) => {
    e.preventDefault();
    getMovies();
  }
  return (
    <div>
      <div className="form">
        <form>
          <input type="text" onChange={(event) => setMovies(event.target.value) }/>
          <button type='submit' onClick={(e) => handle(e)}>Найти</button>
        </form>
      </div>
      <div>
        {Array.isArray(movies)? movies.map((index,movie) => (
          <div key={index}>
            <img src={movie.Poster} alt=""/>
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
          </div>
        )):
        <div key="data">
          <img src={movies.Poster} alt=""/>
          <h1>{movies.Title}</h1>
        <p>{movies.Year}</p>
      </div> }
      </div>
    </div>
  )
}

/*function Searcher() {
  let uRef = React.createRef();
  let movie;
  const handler=()=>{
    axios
      .get(
        "http://www.omdbapi.com/?s=" + uRef.current.value + "&apikey=4b38bf9d"
      )
      .then((response) => {
        movie=response.data.Search;
        console.log(movie);
    });
  }
  return (
    <div className="App">
        <form action={handler}>
          <label htmlFor="film">Введите название фильма</label>
          <input type="text" name="film" id="name" ref={uRef} />
          <Link to="/about" className="links" component={Show} film={movie}>Найти</Link>
        </form>
    </div>
  );
}

function Show(props){
  let movie=props.film;
  return(
    <div>
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

function NotFound() {
  return <h2>Not found</h2>;
}*/

export default function App() {
  return (
    <div className="App">
      <Movies />
    </div>
  );
}

