import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 1rem;
  overflow-y: scroll;
  height: 80vh;
  width: 50vw;

  @media (max-width: 770px) {
    width: fit-content;
  }

  @media (max-width: 375px) {
    width: fit-content;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  transition: background-color 0.2s;

  :hover {
    background-color: ${darken(0.05, "#e6e6e6")};
  }

  a {
    margin: 1rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1;
`;

export const Title = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  margin-right: 1rem;
`;
