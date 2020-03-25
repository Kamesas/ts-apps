export interface IMovie {
  id: number | string;
  title: string;
  [kye: string]: any;
}

export interface ISortTab {
  title: string;
  sortBy: string;
}
