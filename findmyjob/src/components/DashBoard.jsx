import {
  Graphic,
  GraphicsContainer,
  MainContainer,
  DashboardContainer,
  Profil,
  Icon,
  ProfilInformation,
  NameUser,
} from "../styled-components/DashboardStyled";

export default function Dashboard() {
  let user = "Jack";

  return (
    <DashboardContainer>
      <Profil>
        <ProfilInformation>
          <Icon className="fas fa-user-circle" id="avatar" alt="avatar"></Icon>
          <NameUser>Welcome back, {user} !</NameUser>
        </ProfilInformation>
      </Profil>
      <MainContainer>
        <GraphicsContainer className="firstSection">
          <Graphic>Graphic 1</Graphic>
          <Graphic>Graphic 2</Graphic>
          <Graphic>Graphic 3</Graphic>
        </GraphicsContainer>
        <GraphicsContainer className="secondSection">
          <Graphic id="longGraphic">Graphic 4</Graphic>
        </GraphicsContainer>
      </MainContainer>
    </DashboardContainer>
  );
}
