import React from "react";
import "./rowlist.css";
import Row from "../Row/Row";
import requests from "../../../utils/requests";
function Rowlist() {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Top Rated Movies"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={true}
      />

      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} isLargeRow={true} />
      <Row
        title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="Romance"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row
        title="Horror"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true}
      />
    </>
  );
}

export default Rowlist;
