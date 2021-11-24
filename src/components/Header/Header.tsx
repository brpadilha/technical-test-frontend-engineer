import styled from "styled-components";
import logo from "../../assets/Ion_Logo_Color_Tagline.svg";

const Container = styled.div`
  display: flex;
  position: fixed;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  z-index: 1;
`;

const Title = styled.h1`
  margin-left: 1rem;
`;

const Logo = styled.img`
  height: 5rem;
  width: 5rem;
`;

export const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="IonLogo" /> <Title>Search your favorite Band</Title>
    </Container>
  );
};
