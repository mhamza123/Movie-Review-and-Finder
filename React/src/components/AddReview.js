import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import "../styles/AddReview.css"
import useFetch from './useFetch';

const AddReview = ({ username }) => {
  const id = window.location.pathname.split('/')[2];
  const history = useHistory()

  const { error: movieError, isPending: moviePending, data: movie } = useFetch(`http://localhost:8000/movie/${id}`);

  const [reviewText, setReviewText] = useState('');
  const [starRating, setStarRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review submitted:", { username, movieId: id, reviewText, starRating });
    setReviewText('');
    setStarRating(0);
    history.push(`/movie/${id}`);
  };

  return (
    <div className="reviewPage">
        {moviePending? (
        <div className="movie-Details">Loading...</div>
      ) : (
        movie && (
          <div className="moviess">
            <div className="movieDetails">
              <div className="imageAndRest">
                <img src={process.env.PUBLIC_URL + movie.img} alt={movie.title} />
                <div className="restInfoAndButtons">
                    <div className="nameAndButtons">
                        <h2>{movie.name}</h2>
                    </div>
                    <div className="info">
                        <p>Description: {movie.Description}</p>
                        <p>Release: {movie.release}</p>
                        <p>Duration: {movie.duration}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
        <div className="add-review">
        <h2>Add Your Review</h2>
        <div className="form-group">
            <label>Username:  </label><span>  {username}</span>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="review">Review:</label>
            <textarea
                id="review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="rating">Star Rating:</label>
            <input
                type="number"
                id="rating"
                value={starRating}
                onChange={(e) => setStarRating(parseInt(e.target.value))}
                min={0}
                max={5}
                required
            />
            </div>
            <button type="submit-">Submit Review</button>
        </form>
        </div>
    </div>
  );
};

export default AddReview;
