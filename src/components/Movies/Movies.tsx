import React, { useState, useEffect } from "react";
import { IMovie } from "./interfaces";
import { MovieItem } from "./MovieItem";
import { MovieTabs } from "./MovieTabs";

export const Movies = () => {
  const [movieList, setMovieList] = useState<Array<IMovie>>([]);
  const [movieBookmarksList, setMovieBookmarksList] = useState<Array<IMovie>>(
    []
  );
  const [sortBy, setSortBy] = useState("popularity");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&sort_by=${sortBy}.desc`
    ).then(res =>
      res.json().then(body => {
        setMovieList(body.results);
      })
    );
  }, [sortBy]);

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
        <div className="w-100">
          <MovieTabs setSortBy={setSortBy} />
        </div>

        <div className="col-9">
          <div className="row">
            {Array.isArray(movieList) &&
              movieList.map(movie => {
                return (
                  <div key={movie.id} className="col-4 d-flex">
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
