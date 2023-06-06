import React from 'react'
import './movieDetails.css'

const MovieDetails = ({movieObj}) => {

    let {Title, Poster, Year, Genre, Rated, Runtime, Actors, Plot} = movieObj;
  return (
    <div className="row wholeBottom">

                <div className="col-12">
                    <div className="row bottom">
                        <div className="col-6 bigPic">
                            <img className="bigImage" src={Poster} height="450px" width="50%"/>
                            <h2>{Title} ({Year})</h2>
                        </div>
                        <div className="col-6 details">
                            <div className="row"><div className="category">Genres: </div>{Genre}</div>
                            <div className="row"><div className="category">Rating: </div>{Rated}</div>
                            <div className="row"><div className="category">Runtime: </div>{Runtime}</div>
                            <div className="row"><div className="category">Actors: </div>{Actors}</div>
                            <div className="row"><div className="category">Plot: </div><div className="plot">{Plot}</div></div>
                        </div>
                    </div>
                    
                </div>

            </div>
  )
}

export default MovieDetails
