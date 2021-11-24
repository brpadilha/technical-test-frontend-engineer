import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { BandDetailsSearchProps } from "../Dashboard/Dashboard";

type BandDetailsProps = {
  bandDetails: BandDetailsSearchProps;
};

export const BandDetails = ({ bandDetails }: BandDetailsProps) => {
  const bandDetailsCleaned = bandDetails._embedded.attractions[0];

  return (
    <Container role="band-details">
      <BandDetailsContent>
        <div>
          <h1>{bandDetailsCleaned.name}</h1>
          <p>
            Genre:
            {bandDetailsCleaned.classifications[0].genre.name}
          </p>
          <p>
            Sub Genre: {bandDetailsCleaned.classifications[0].subGenre.name}
          </p>
        </div>
        <SocialMedia>
          {bandDetailsCleaned.extraLinks?.facebook && (
            <a href={bandDetailsCleaned.extraLinks.facebook[0].url}>
              <FaFacebook size={20} />
            </a>
          )}
          {bandDetailsCleaned.extraLinks?.twitter && (
            <a href={bandDetailsCleaned.extraLinks.twitter[0].url}>
              <FaTwitter size={20} />
            </a>
          )}
          {bandDetailsCleaned.extraLinks?.youtube && (
            <a href={bandDetailsCleaned.extraLinks.youtube[0].url}>
              <FaYoutube size={20} />
            </a>
          )}
          {bandDetailsCleaned.extraLinks?.instagram && (
            <a href={bandDetailsCleaned.extraLinks.instagram[0].url}>
              <FaInstagram size={20} />
            </a>
          )}
        </SocialMedia>
      </BandDetailsContent>

      <Image
        src={bandDetailsCleaned.images[1].url}
        alt={bandDetailsCleaned.name}
      />
    </Container>
  );
};

const BandDetailsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  width: -webkit-fill-available;
  height: auto;
  margin: 1rem;
  border-radius: 0.5rem;
`;
