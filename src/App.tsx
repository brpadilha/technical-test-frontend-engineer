import styled from "styled-components";
import { Header } from "./components/Header/Header";
import GlobalStyle from "./styles/global";
import { Dashboard } from "./components/Dashboard/Dashboard";

export const App = () => {
  return (
    <Page>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </Page>
  );
};

const Page = styled.div`
  height: 100vh;
`;
