import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;

`;


export const Div = styled.ul`
  width: 20%;

  @media (max-width:640px) {
    display: none;
  }
`;

export const Logo = styled.div`
  font-size: 2rem;

  @media (max-width:640px) {
    font-size: 20px
  }
`;
