import styled from "styled-components";

export const Search = styled.input`
  border: 2px solid blue;
  border-radius: 5px;
  padding: 1%;
  width: 25vw;
  font-size: 12pt;
  color: blue;
`;

export const ClearButton = styled.div`
  width: 10vw;
  padding: 10px;
  margin: 1%;
  cursor: pointer;
  background-color: blue;
  border-radius: 5px;
  color: white;
  text-align: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Item = styled.div`
  border: 1px solid blue;
  display: flex;
  align-items: center;
  flex-direction: column;
  //border-radius: 5px;

  overflow: hidden;
  margin-bottom: 2%;
  padding: 1%;
  box-shadow: 2px 2px 5px grey;
`;

export const FirstInfo = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Skills = styled.div`
  display: flex;
  border: 1px solid green;
  color: blue;
  font-weight: bold;
  width: 50%;
  justify-content: space-around;
`;

export const Preview = styled.div`
  //border: 1px solid yellow;
  text-align: center;
  padding: 3%;
  height: 25%;
  overflow: hidden;
`;

export const More = styled.span`
  display: flex;
  justify-content: flex-end;
  color: blue;
  cursor: pointer;
`;

export const I = styled.i`
  margin: 1%;
`;

export const Main = styled.div`
  border: 1px solid red;
  width: 30vw;
  height: 32vh;
  ${({ showMore }) =>
    showMore &&
    `height:auto;
    `}
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
  //border: 1px solid red;
`;
