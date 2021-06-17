import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

const base_uri = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(fetchURL);
      setMovies(response.data.results);
    })();
  }, [fetchURL]);

  console.table(movies);

  return (
    <div className="Row">
      <h2 className="Row__title">{title}</h2>
      <div className="Row__Posters">
        {movies.map((movie) => (
          <React.Fragment>
            <img
              key={movie.id}
              src={`${base_uri}${movie.poster_path}`}
              alt={movie.name}
              className={isLargeRow ? `Row__image Large` : `Row__image`}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Row;
