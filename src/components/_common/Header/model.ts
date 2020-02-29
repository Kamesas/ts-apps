import { IMenuHeader } from "./interfaces";

export const HEADER_LINKS: Array<IMenuHeader> = [
  { title: "Main", link: "/", exact: true },
  { title: "Auth", link: "/auth", exact: false }
];
