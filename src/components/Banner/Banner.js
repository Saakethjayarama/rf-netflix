import axios from "axios";
import React, { useEffect, useState } from "react";
import { uri } from "../../TMDB/uri";
import "./Banner.css";

const base_uri = "";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(uri.fetchNetflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * response.data.results.length - 1
      );
      setMovie(response.data.results[randomIndex]);
    })();
  }, []);

  console.log(movie);

  return (
    <header
      className="Banner"
      style={{
        background: ` url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="Banner__gradient"></div>
      <div className="Banner_wrapper">
        {/* title */}
        <h1 className="Banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        {/* Buttons */}
        <div className="Banner__buttons">
          <button className="Banner__button">Play</button>
          <button className="Banner__button">My List</button>
        </div>
        {/* Description */}
        <div className="Banner_description">{movie?.overview}</div>
      </div>
    </header>
  );
}

export default Banner;
