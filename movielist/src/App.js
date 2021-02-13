import React from "react";
import "./App.css";
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <h2> Redux Movie</h2>
      <div className="container">
        <MovieList />
        <MovieDetails />
      </div>
      
    </div>
  );
}
export default App;
