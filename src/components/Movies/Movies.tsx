import React from "react";
import { moviesData } from "./model";
console.log(moviesData);

export const Movies = () => {
  return (
    <div className="container">
      <h1 className="h1">Movies list</h1>
      <ul className="list-group">
        {Array.isArray(moviesData) &&
          moviesData.map(movie => {
            return (
              <li key={movie.id} className="list-group-item bg-dark ">
                {movie.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
