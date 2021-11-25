import styled from "styled-components";

export const BandDetailsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;

  a {
    margin-right: 1rem;

    svg {
      color: #161515;
    }
  }
`;

export const Container = styled.div`
  background-color: #fff;
  width: 40vw;
  height: 20rem;
  margin: 1rem;
  padding: 1rem;
  height: auto;

  @media (max-width: 770px) {
    width: fit-content;
  }

  @media (max-width: 375px) {
    width: fit-content;
  }
`;

export const Image = styled.img`
  width: -webkit-fill-available;
  height: auto;
  margin: 1rem;
  border-radius: 0.5rem;
`;
