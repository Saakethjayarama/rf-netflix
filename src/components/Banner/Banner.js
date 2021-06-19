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
      const mv = { ...response.data.results[randomIndex] };
      let { overview } = mv;
      console.log(overview);
      if (overview.length > 223) {
        overview = overview.slice(223) + "...";
      }

      setMovie({ ...mv, overview });
    })();
  }, []);

  const [isBlack, setBlack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBlack(true);
      } else setBlack(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <header
      className="Banner"
      style={{
        background: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className={isBlack ? "Banner__head Black" : "Banner__head BgNone"}>
        {/* Netflix icon */}
        <img src="./netflix.png" className="Banner__logo" />
        {/* Acc Icon */}
        <img
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          className="Banner__acc"
        />
      </div>
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
