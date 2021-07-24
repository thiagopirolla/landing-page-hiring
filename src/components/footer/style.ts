import styled from "styled-components";

export const Header = styled.nav`
  background: #282828;
  color: #fff;
  grid-area: nav;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
`;

export const NavbarButton = styled.b`
  text-decoration: none;
  border-radius: 20px;
  background-color: #fff;
  color: #282828 !important;
  padding: 9px;
  

`;

export const NavbarRightElements = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > a {
    margin-left: 30px;
    text-decoration: none;
  }
  @media (max-width: 409px) {
    display: none;
  }

  & > a > b {
    color: #fff;
    font-size: 1em;
  }
`;

export const Logo = styled.b`
  font-size: 1.5em;
  color: #fff;
`;
