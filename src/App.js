import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import { uri } from "./TMDB/uri";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={uri.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={uri.fetchTrending} />
      <Row title="Top Rated" fetchURL={uri.fetchTopRated} />
      <Row title="Action Movies" fetchURL={uri.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={uri.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={uri.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={uri.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={uri.fetchDocumentaries} />
    </div>
  );
}

export default App;
