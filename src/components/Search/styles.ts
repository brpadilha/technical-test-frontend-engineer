import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.form<{
  hasVideoList: boolean;
}>`
  margin-top: ${(props) => props.hasVideoList && "10rem"};
  display: flex;

  flex-direction: ${(props) => (props.hasVideoList ? "row" : "column")};
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 38rem;
  height: ${(props) => (props.hasVideoList ? "5rem" : "14rem")};
  border-radius: 8px;

  @media (max-width: 770px) {
    margin-top: ${(props) => props.hasVideoList && "40rem"};
  }
  @media (max-width: 375px) {
    justify-content: center;
  }
`;

export const Input = styled.input`
  width: 25rem;
  height: 3.5rem;
  padding: 1rem;
  border-radius: 1rem;
  color: #3a3a3a;
  border: 1px solid #5541d7;
  margin: 1rem;
  &::placeholder {
    color: #a8a8b3;
  }

  @media (max-width: 375px) {
    width: 50vw;
  }
`;

export const Button = styled.button<{ hasVideoList: boolean }>`
  width: ${(props) => (props.hasVideoList ? "10rem" : "25rem")};
  height: 3rem;
  background-color: #5541d7;
  border-radius: 1rem;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem;
  transition: background-color 0.2s;

  :hover {
    background-color: ${darken(0.05, "#5541d7")};
  }
`;
