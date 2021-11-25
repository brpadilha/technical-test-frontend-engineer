import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { BandDetailsSearchProps } from "../Dashboard/Dashboard";
import { BandDetailsContent, Container, SocialMedia, Image } from "./styles";

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
