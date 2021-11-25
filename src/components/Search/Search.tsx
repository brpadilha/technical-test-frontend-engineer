import { FormEvent, useState } from "react";
import api from "../../services/api";
import { BandDetailsSearchProps } from "../Dashboard/Dashboard";
import { Button, Container, Input } from "./styles";

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

  let youTubeUrl =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10";

  let ticketMasterUrl =
    "https://app.ticketmaster.com/discovery/v2/attractions.json";

  async function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const responseTicketMaster = await api.get<BandDetailsSearchProps>(
        `${ticketMasterUrl}?size=1&keyword=${searchVideo}&apikey=${process.env.TICKET_MASTER_API_KEY}`
      );
      setBandDetails(responseTicketMaster.data);

      const responseYoutube = await api.get(
        `${youTubeUrl}&maxResults=20&q=${searchVideo}&type=video&key=${process.env.GOOGLE_API_KEY}`
      );

      setVideoList(responseYoutube.data.items);
    } catch (err) {
      console.log(err);
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
        data-testid="search"
        placeholder="Search..."
        onChange={(e) => setSearchVideo(e.target.value)}
      />
      <Button type="submit" hasVideoList={hasVideoList}>
        Search
      </Button>
    </Container>
  );
};
