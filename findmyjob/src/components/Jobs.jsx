import React, { useState } from "react";
import {
  FirstInfo,
  Skills,
  Preview,
  More,
  Main,
  Infos,
  Title,
  SecondtInfo,
  Test,
  Test2,
  Reverse,
} from "./styled-components/Jobs";

const Jobs = ({ job }) => {
  const [showMore, SetShowMore] = useState(false);

  const handleShowMore = () => {
    SetShowMore(!showMore);
  };

  return (
    <Main showMore={showMore}>
      <Title>{job.title}</Title>
      <FirstInfo>
        <Skills>
          {job.skillList &&
            job.skillList.map((skill, key) => {
              return <Test key={key}>{skill.name}</Test>;
            })}
          {job.skillsList &&
            job.skillsList.map((skill, key) => {
              return <Test key={key}>{skill.name}</Test>;
            })}
        </Skills>
      </FirstInfo>
      <SecondtInfo>
        <Infos>
          <Test2>{job.details.start}</Test2>
        </Infos>
        <Infos>
          <Test2>{job.details.contract}</Test2>
        </Infos>
        <Infos>
          <Test2>{job.details.salary}</Test2>
        </Infos>
      </SecondtInfo>
      <Reverse>
        <Preview showMore={showMore}>
          <p>{job.descriptionPreview}</p>
        </Preview>
        <More onClick={handleShowMore}>
          {showMore ? <p>...Moins</p> : <p>...Voir plus</p>}
        </More>
      </Reverse>
    </Main>
  );
};
export default Jobs;
