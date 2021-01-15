import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Graphic = styled.div`
  width: 30vw;
  height: 40vh;
  color: white;
  background: rgb(21, 19, 19);
  box-shadow: 5px 5px 8px black;
  border: 1px solid grey;
  margin: 2vw;
  border-radius: 20px;

  &:hover {
    box-shadow: 5px 5px 10px rgb(162, 161, 161);
  }

  &#longGraphic{
    height: 35vh;
    width: 75vw;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    170deg,
    rgb(100, 100, 100) 50%,
    rgb(161, 60, 85) 85%
  );
`;

export const GraphicsContainer = styled.div`
  &.firstSection {
    display: flex;
    justify-content: space-around;
    height: 45vh;
    width: 80vw;
  }
  &.firstSection {
    display: flex;
    justify-content: space-around;
    height: 40h;
  }
`;

export const Profil = styled.div`
  background: rgb(50, 50, 50);
  height: 89.5vh;
  width: 20vw;
`;

export const Icon = styled.i`
  font-size: 10vh;
  color: rgb(100, 100, 100);
  margin: 4vh;
  text-shadow: 2px 2px 2px black;
`;

export const ProfilInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameUser = styled.h1`
  font-size: 2.5vh;
  color: rgb(100, 100, 100);
  text-shadow: 2px 2px 2px black;
`;
