import React, { useState } from "react";
import {
  SearchContainer,
  Search,
  ClearButton,
  List,
  Item,
} from "./styled-components/Jobs";

const SearchBar = ({ setsearchValue, searchValue }) => {
  const clear = () => {
    setsearchValue("");
  };

  return (
    <>
      <SearchContainer>
        <Search
          type="text"
          value={searchValue}
          placeholder="Recherchez une offre"
          onChange={event => {
            setsearchValue(event.target.value);
          }}
        />
        {searchValue !== "" && (
          <ClearButton
            onClick={() => {
              clear();
            }}
          >
            "{searchValue}" <i className="fas fa-times-circle"></i>
          </ClearButton>
        )}
      </SearchContainer>
    </>
  );
};

export default SearchBar;
