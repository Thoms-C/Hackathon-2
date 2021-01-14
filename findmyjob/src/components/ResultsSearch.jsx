import React from "react";
import jobs from "../assets/json/jobs.json";
import Jobs from "./Jobs";
import { List, Item } from "./styled-components/Jobs";

function ResultsSearch({ searchValue, setsearchValue }) {
  return (
    <>
      <List>
        {jobs
          .filter((job, i) => {
            if (i > 50) {
              return false;
            }
            if (!job.title) {
              return false;
            }
            if (!searchValue) {
              return false;
            }
            return job.title.toLowerCase().includes(searchValue.toLowerCase());
          })

          .map((job, key) => {
            return (
              <>
                <Item key={key}>
                  <Jobs job={job} />
                </Item>
              </>
            );
          })}
      </List>
    </>
  );
}

export default ResultsSearch;
