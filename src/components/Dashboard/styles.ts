import styled from "styled-components";

export const Container = styled.div<{
  hasVideoList: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
  }
`;
