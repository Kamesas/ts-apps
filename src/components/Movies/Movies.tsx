import React, { useState, useEffect } from "react";
import { IMovie } from "./interfaces";
import { MovieItem } from "./MovieItem";

export const Movies = () => {
  const [movieList, setMovieList] = useState<Array<IMovie>>([]);
  const [movieBookmarksList, setMovieBookmarksList] = useState<Array<IMovie>>(
    []
  );

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&sort_by=release_date.desc`
    ).then(res =>
      res.json().then(body => {
        setMovieList(body.results);
      })
    );
  }, []);

  const onRemoveMovie = (id: string | number) => {
    const newMovieList = movieList.filter(item => item.id !== id);
    setMovieList(newMovieList);
  };

  const onAddMovieToBookmarks = (movie: IMovie) => {
    !movieBookmarksList.find(item => item.id === movie.id) &&
      setMovieBookmarksList([...movieBookmarksList, movie]);
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="h1 w-100">Movies list</h1>

        <div className="col-9">
          <div className="row">
            {Array.isArray(movieList) &&
              movieList.map(movie => {
                return (
                  <div key={movie.id} className="col-4">
                    <MovieItem
                      movie={movie}
                      onRemoveMovie={onRemoveMovie}
                      onAddMovieToBookmarks={onAddMovieToBookmarks}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-3">
          <p>Bookmarks list: {movieBookmarksList.length}</p>
        </div>
      </div>
    </div>
  );
};
