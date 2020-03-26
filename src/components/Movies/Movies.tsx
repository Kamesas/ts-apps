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
  const [page, setPage] = useState(1);
  const [dataPages, setDataPages] = useState({ totalMovies: 0, totalPages: 0 });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&sort_by=${sortBy}.desc&page=${page}`
    ).then(res =>
      res.json().then(body => {
        console.log(body);
        setDataPages({
          totalMovies: body.total_results,
          totalPages: body.total_pages
        });
        setMovieList(body.results);
      })
    );
  }, [sortBy, page]);

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
          <div className="p-5 d-flex justify-content-between">
            <button
              className="btn btn-outline-primary"
              onClick={() => setPage(prev => (prev > 1 ? prev - 1 : 1))}
            >
              Prev
            </button>
            <div>
              <button
                className="btn btn-outline-primary mx-1"
                onClick={() => setPage(prev => prev + 1)}
              >
                {page}
              </button>
              <button
                className="btn btn-outline-primary mx-1"
                onClick={() => setPage(prev => prev + 1)}
              >
                {page + 1}
              </button>
              <button
                className="btn btn-outline-primary mx-1"
                onClick={() => setPage(prev => prev + 2)}
              >
                {page + 2}
              </button>
              <button
                className="btn btn-outline-primary mx-1"
                // onClick={() => setPage(dataPages.totalPages)}
              >
                {dataPages.totalPages}
              </button>
            </div>
            <button
              className="btn btn-outline-primary"
              onClick={() =>
                setPage(prev =>
                  prev < dataPages.totalPages ? prev + 1 : dataPages.totalPages
                )
              }
            >
              Next
            </button>
          </div>
        </div>
        <div className="col-3">
          <p>Bookmarks list: {movieBookmarksList.length}</p>
        </div>
      </div>
    </div>
  );
};
