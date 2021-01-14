import React, { useState } from "react";
import Jobs from "./Jobs";

import jobs from "../assets/jobs.json";
import {
  SearchContainer,
  Search,
  ClearButton,
  List,
  Item,
} from "../styled-components/Job";

const JobsList = () => {
  const [searchValue, setsearchValue] = useState("");

  const [resultsSearch, setResultsSearch] = useState(jobs);

  const clear = () => {
    setsearchValue("");
  };

  return (
    <>
      <h1>Offres d'emploi</h1>
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
            "{searchValue}" <i class="fas fa-times-circle"></i>
          </ClearButton>
        )}
      </SearchContainer>
      <List>
        {resultsSearch
          .filter(job => {
            if (searchValue === "") {
              return { job };
            } else if (
              job.title &&
              job.title.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return job;
            }
          })
          .map((job, key) => {
            return (
              <Item key={key}>
                <Jobs job={job} />
              </Item>
            );
          })}
      </List>
    </>
  );
};

export default JobsList;
