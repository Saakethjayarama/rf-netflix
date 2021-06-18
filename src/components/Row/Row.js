import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_uri = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [currentTrailerMovieId, setCurrentTrailerMovieId] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(fetchURL);
      const mvs = [];

      response.data.results.forEach((mv) => {
        if (mv.poster_path != null || mv.poster_path != undefined) mvs.push(mv);
      });
      setMovies(mvs);
    })();
  }, [fetchURL]);

  const handleClick = (movieId) => {
    if (movieId == currentTrailerMovieId) {
      setTrailerUrl("");
      setCurrentTrailerMovieId(null);
    } else {
      setCurrentTrailerMovieId(movieId);
      const selectedMovie = movies.filter((mv) => mv.id == movieId)[0];
      console.log(selectedMovie);

      movieTrailer(selectedMovie?.name || selectedMovie?.title || "")
        .then((url) => {
          setTrailerUrl(new URLSearchParams(new URL(url).search).get("v"));
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="Row">
      <h2 className="Row__title">{title}</h2>
      <div className="Row__Posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie.id)}
            src={`${base_uri}${movie.poster_path}`}
            alt={movie.name}
            className={isLargeRow ? `Row__image Large` : `Row__image`}
          />
        ))}
      </div>
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={{ width: "100%", height: 390, playerVars: { autoplay: 1 } }}
        />
      )}
    </div>
  );
}

export default Row;
