import { darken } from "polished";
import { FormEvent, useState } from "react";
import styled from "styled-components";
import api from "../../services/api";
import { BandDetailsSearchProps } from "../Dashboard/Dashboard";

type SearchProps = {
  hasVideoList: boolean;
  setVideoList: (videoList: any) => void;
  setBandDetails: (bandDetail: any) => void;
};

export const Search = ({
  hasVideoList,
  setVideoList,
  setBandDetails,
}: SearchProps) => {
  const [searchVideo, setSearchVideo] = useState<string>("");
  // GET YOUTUBE DATA

  let youTubeUrl =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10";
  const queryString = "";
  const maxResults = 20;

  // GET TICKET_MASTER DATA

  let ticketMasterUrl =
    "https://app.ticketmaster.com/discovery/v2/attractions.json";

  async function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const responseTicketMaster = await api.get<BandDetailsSearchProps>(
        `${ticketMasterUrl}?size=1&keyword=${searchVideo}&apikey=${process.env.TICKET_MASTER_API_KEY}`
      );
      console.log(responseTicketMaster.data);
      setBandDetails(responseTicketMaster.data);

      const responseYoutube = await api.get(
        `${youTubeUrl}&maxResults=${maxResults}&q=${searchVideo}&type=video&key=${process.env.GOOGLE_API_KEY}`
      );

      setVideoList(responseYoutube.data.items);
    } catch (err) {
      switch (err) {
        case "403":
          console.log("403");
          break;

        default:
          break;
      }
    }
  }

  return (
    <Container
      onSubmit={handleSearchSubmit}
      hasVideoList={hasVideoList}
      role="search"
    >
      <Input
        value={searchVideo}
        placeholder="Search..."
        onChange={(e) => setSearchVideo(e.target.value)}
      />
      <Button type="submit" hasVideoList={hasVideoList}>
        Search
      </Button>
    </Container>
  );
};

const Container = styled.form<{
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

const Input = styled.input`
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

const Button = styled.button<{ hasVideoList: boolean }>`
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
