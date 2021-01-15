import styled from "styled-components";

export const Search = styled.input`
  border: 2px solid black;
  border-radius: 5px;
  padding: 3%;
  width: 35vw;
  font-size: 12pt;
  color: blue;
  margin-bottom: 25vh;
`;

export const ClearButton = styled.div`
  width: 10vw;
  padding: 10px;
  position: relative;
  cursor: pointer;
  background-color: #0e263d;
  border-radius: 5px;
  color: white;
  text-align: center;
  bottom: 24vh;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  margin: 2% 20% 2% 20%;
  padding: 1%;
  border-radius: 50px;
  background: white;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  @media (max-width: 768px) {
    box-shadow: none;
    border-radius: 0;
  }
`;

export const FirstInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #0e263d;
`;

export const SecondtInfo = styled.div`
  display: flex;
  margin-top: 2vh;
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  font-weight: bold;
  width: 100%;
  padding: 8px;

  &:not(:last-child) p {
    margin-right: 16px;
  } 

  & p {
    margin: 8px 10px 8px 0;
    }
  }
`;

export const Preview = styled.div`
  text-align: center;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  padding: 3%;
  height: 25%;
  font-size: 13pt;
  overflow: hidden;
`;

export const More = styled.span`
  display: flex;
  justify-content: center;
  color: #0e263d;
  cursor: pointer;
  margin-top: 2vh;
  font-weight: bold;
`;

export const I = styled.i`
  margin: 1%;
`;

export const Main = styled.div`
  width: 75vw;
  height: 20vh;
  ${({ showMore }) =>
    showMore &&
    `height:auto;
    `}
  @media (max-width: 768px) {
    height: 33.3vh;
    width: 90vw;
    ${({ showMore }) =>
      showMore &&
      `height:auto;
      `}
  }
`;

export const Infos = styled.div`
  width: 10vw;
  text-align: center;
  color: #0e263d;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  border-bottom: 2px solid #0e263d;
  color: #0e263d;
`;
export const Searchtext = styled.p`
  color: white;
  text-align: center;
  margin-bottom: 2vh;
  font-size: 25px;
`;

export const Test = styled.p`
  border: 2px solid white;
  border-radius: 5px;
  background-color: #0e263d;
  padding: 0.5vh;
`;

export const Test2 = styled.p`
  border: 2px solid black;
  border-radius: 20px;
  background-color: white;
  padding: 0.6vh;
  margin-left: 1vh @media (max-width: 640px) {

  }

  margin-left: 1vh;
`;

export const Reverse = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
