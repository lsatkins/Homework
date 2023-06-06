import React, { useState, useEffect } from 'react';
import MovieDetails from './MovieDetails';
import './movies.css'

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [movieData, setMovieData] = useState({});
    const [isMovieClicked, setIsMovieClicked] = useState(false);

    const getMovies = async () => {
        let response = await fetch('http://www.omdbapi.com/?s=batman&apikey=39a6585b');
        let data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        getMovies();
    }, []);

    const getMovie = async (selectedMovieID) => {
        await getMovieData(selectedMovieID);
        setIsMovieClicked(true);
    };

    const getMovieData = async (id) => {
        setMovieData({});
        let response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=39a6585b`);
        let data = await response.json();
        setMovieData(data);
    };

    return (
        <>
            <div className="row movies">
                {movies.map((movie) => (
                    <div className="col-2" key={movie.imdbID} onClick={() => getMovie(movie.imdbID)}>
                        <img src={movie.Poster} height="100px" width="100px" alt={movie.Title} />
                        <p>{movie.Title}</p>
                    </div>
                ))}
            </div>
            
            {isMovieClicked && <MovieDetails movieObj={movieData} />}
        </>
    );
};

export default Movies;
