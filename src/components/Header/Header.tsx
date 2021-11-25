import logo from "../../assets/Ion_Logo_Color_Tagline.svg";
import { Container, Logo, Title } from "./styles";

export const Header = () => {
  return (
    <Container role="header">
      <Logo src={logo} alt="IonLogo" role="logo" />{" "}
      <Title>Search your favorite Band</Title>
    </Container>
  );
};
