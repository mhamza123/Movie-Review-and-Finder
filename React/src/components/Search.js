import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Search = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const { error, isPending, data: moviesData } = useFetch(`http://localhost:8000/movie`);

  useEffect(() => {
    if (moviesData) {
      const filteredMovies = moviesData.filter(movie => {
        const lowerCaseQuery = query.toLowerCase();
        return (
          movie.name && movie.name.toLowerCase().includes(lowerCaseQuery) ||
          movie.description && movie.description.toLowerCase().includes(lowerCaseQuery)
        );
      });

      setMovies(filteredMovies);
    }
  }, [moviesData, query]);

  return (
    <div className="home">
      <div style={{ display: "grid", alignContent: "center", height: "100%" }}>
        <h2 style={{color: "#efef83"}}>Search Results for "{query}"</h2>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {movies.length === 0 && !isPending && <p style={{color: "#efef83"}}>No Movies Found</p>}
        {movies.map(movie => (
          <div style={{margin: "20px"}} key={movie.id}>
            <div className="movie-preview" key={movie.id} >
              <div className="image">
                <Link to={`/movie/${movie.id}`}>
                  <img src={process.env.PUBLIC_URL + movie.img} alt={movie.name} />
                </Link>
              </div>
              <div className="info">
                <Link to={`/movie/${movie.id}`}>
                  <h2>{ movie.name }</h2>
                </Link>
                <p>Description: { movie.Description }</p>
                <p>Release: { movie.release }</p>
                <p>Duration: { movie.duration }</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Search;
