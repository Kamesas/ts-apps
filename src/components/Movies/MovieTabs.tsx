import React, { useState } from "react";
import { sortTabsList } from "./model";

interface IMovieTabs {
  setSortBy: (sortBy: string) => void;
}

export const MovieTabs = ({ setSortBy }: IMovieTabs) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const onSelectTab = (tab: string, idx: number) => {
    setSortBy(tab);
    setActiveTab(idx);
  };

  return (
    <ul className="tabs nav nav-piils mb-4">
      {sortTabsList.map((item, i) => {
        return (
          <li
            key={i}
            className="nav-item cursorPointer"
            onClick={() => onSelectTab(item.sortBy, i)}
          >
            <div
              className={`nav-link ${i === activeTab ? "bg-secondary" : ""}`}
            >
              {item.title}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
