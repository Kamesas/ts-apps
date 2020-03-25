import { ISortTab } from "./interfaces";

export const sortTabsList: ISortTab[] = [
  { title: "Popular", sortBy: "popularity" },
  { title: "Revenue", sortBy: "release_date" },
  { title: "Vote average", sortBy: "vote_average" }
];
