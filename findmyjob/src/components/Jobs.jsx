import React, { useState } from "react";
import {
  FirstInfo,
  Skills,
  Preview,
  More,
  Main,
  Infos,
} from "../styled-components/Job";

const Jobs = ({ job }) => {
  const [showMore, SetShowMore] = useState(false);

  const handleShowMore = () => {
    SetShowMore(!showMore);
  };

  return (
    <Main showMore={showMore}>
      <h2>{job.title}</h2>
      <FirstInfo>
        <Skills>
          {job.skillList &&
            job.skillList.map((skill, key) => {
              return <p key={key}>{skill.name}</p>;
            })}
        </Skills>
        <Infos>
          <i className="far fa-stopwatch"></i>
          <p>{job.details.start}</p>
        </Infos>
        <Infos>
          <i className="far fa-briefcase"></i>
          <p>{job.details.contract}</p>
        </Infos>
      </FirstInfo>
      <Preview showMore={showMore}>
        <p>{job.descriptionPreview}</p>
      </Preview>
      <More onClick={handleShowMore}>
        {showMore ? <p>...Moins</p> : <p>...Voir plus</p>}
      </More>
    </Main>
  );
};
export default Jobs;