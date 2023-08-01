import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import "../styles/Movie.css"

const Movie = () => {
    let { id } = useParams();
    const { error, isPending, data: movie } = useFetch(`http://localhost:8000/movie/${id}`);
  
    return (
        <div className="movieDetails">
        { error && <div className="movieDetails">{ error }</div> }
        { isPending && <div className="movieDetails">Loading...</div> }
        { movie &&  
            <div className="movieDetails" key={movie.id} >
                <div>
                <img src={process.env.PUBLIC_URL + movie.img} />
                </div>
                <div className="info">
                <p>Description: { movie.Description }</p>
                <p>Release: { movie.release }</p>
                <p>Duration: { movie.duration }</p>
                </div>
            </div> 
        }
        </div>
       
    );
}
 
export default Movie;