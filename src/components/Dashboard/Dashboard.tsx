import { useState } from "react";
import styled from "styled-components";
import { TICKET_MASTER_API_MOCK, YOUTUBE_API_MOCK } from "../../utils/mocks";
import { BandDetails } from "../BandDetails/BandDetails";
import { Search } from "../Search/Search";
import { VideoList } from "../VideoList/VideoList";

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
  const [videoList, setVideoList] = useState<InfoSearchProps[]>(() => {
    return YOUTUBE_API_MOCK;
  });

  const [bandDetails, setBandDetails] = useState<BandDetailsSearchProps | null>(
    () => {
      return TICKET_MASTER_API_MOCK;
    }
  );

  const hasVideoList = videoList.length > 0;
  return (
    <Container hasVideoList={hasVideoList}>
      <Search
        hasVideoList={hasVideoList}
        setVideoList={setVideoList}
        setBandDetails={setBandDetails}
      />
      {hasVideoList && (
        <Content>
          {bandDetails && <BandDetails bandDetails={bandDetails} />}
          <VideoList videoList={videoList} />
        </Content>
      )}
    </Container>
  );
};

const Container = styled.div<{
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

const Content = styled.div`
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
