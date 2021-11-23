import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

type BandDetailsProps = {
  bandName: string;
};

export const BandDetails = () => {
  return (
    <Container>
      <BandDetailsContent>
        <div>
          <h1>Anitta</h1>
          <p>Genre:World</p>
          <p>Sub Genre: Latin Pop</p>
        </div>
        <SocialMedia>
          <a href="https://www.instagram.com/anittaflores/?hl=pt-br">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.instagram.com/anittaflores/?hl=pt-br">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.instagram.com/anittaflores/?hl=pt-br">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/anittaflores/?hl=pt-br">
            <FaYoutube size={20} />
          </a>
        </SocialMedia>
      </BandDetailsContent>
      <Carousel showThumbs={false}>
        <Image
          src="https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_LARGE_16_9.jpg"
          alt="Anitta"
        />
        <Image
          src="https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_LARGE_16_9.jpg"
          alt="Anitta"
        />
        <Image
          src="https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_LARGE_16_9.jpg"
          alt="Anitta"
        />
        <Image
          src="https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_LARGE_16_9.jpg"
          alt="Anitta"
        />
      </Carousel>
    </Container>
  );
};

const BandDetailsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;

  a {
    margin-right: 1rem;

    svg {
      color: #161515;
    }
  }
`;

const Container = styled.div`
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

const Image = styled.img`
  width: 3rem;
  height: auto;
  margin: 1rem;
`;
