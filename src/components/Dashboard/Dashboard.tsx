import { useState } from "react";
import { BandDetails } from "../BandDetails/BandDetails";
import { Search } from "../Search/Search";
import { VideoList } from "../VideoList/VideoList";
import { Container, Content } from "./styles";
export type InfoSearchProps = {
  id: {
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
    };
    rating: number;
  };
};

export type BandDetailsSearchProps = {
  _embedded: {
    attractions: Array<{
      name: string;
      id: string;
      images: Array<{
        url: string;
      }>;
      classifications: Array<{
        genre: {
          id: string;
          name: string;
        };
        subGenre: {
          id: string;
          name: string;
        };
      }>;
      extraLinks?: {
        facebook?: Array<{
          url: string;
        }>;
        twitter?: Array<{
          url: string;
        }>;
        youtube?: Array<{
          url: string;
        }>;
        instagram?: Array<{
          url: string;
        }>;
      };
    }>;
  };
};

export const Dashboard = () => {
  const [videoList, setVideoList] = useState<InfoSearchProps[] | null>(null);

  const [bandDetails, setBandDetails] = useState<BandDetailsSearchProps | null>(
    null
  );

  return (
    <Container hasVideoList={!!videoList}>
      <Search
        hasVideoList={!!videoList}
        setVideoList={setVideoList}
        setBandDetails={setBandDetails}
      />
      {videoList && (
        <Content>
          {bandDetails && <BandDetails band={bandDetails} />}
          <VideoList videoList={videoList} />
        </Content>
      )}
    </Container>
  );
};
