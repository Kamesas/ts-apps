import React from "react";
import { MdDeleteForever, MdBookmarkBorder } from "react-icons/md";
import { IMovie } from "./interfaces";

interface IProps {
  movie: IMovie;
  onRemoveMovie: (id: string | number) => void;
  onAddMovieToBookmarks: (movie: IMovie) => void;
}

export const MovieItem = ({
  movie,
  onRemoveMovie,
  onAddMovieToBookmarks
}: IProps) => {
  return (
    <div className="card bg-dark mb-4">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
          movie.poster_path}`}
        alt="alt"
      />
      <h5 className="card-title p-3"> {movie.title}</h5>
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="d-flex justify-content-between">
          <button
            onClick={() => onAddMovieToBookmarks(movie)}
            className="btn btn-outline-primary btn-sm"
          >
            <MdBookmarkBorder size={24} />
          </button>
          <button
            onClick={() => onRemoveMovie(movie.id)}
            className="btn btn-outline-danger btn-sm"
          >
            <MdDeleteForever size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
