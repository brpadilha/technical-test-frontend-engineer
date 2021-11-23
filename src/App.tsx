import React, { FormEvent, useState } from "react";
import api from "./services/api";
import styled from "styled-components";
import { BandDetails } from "./components/BandDetails/BandDetails";
import { Header } from "./components/Header/Header";
import GlobalStyle from "./styles/global";
import { Search } from "./components/Search/Search";
import { Videolist } from "./components/VideoList/VideoList";

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

export const App = () => {
  const [videoList, setVideoList] = useState<InfoSearchProps[]>(() => {
    const storagedVideoList = localStorage.getItem("@videoList");

    if (storagedVideoList) {
      return JSON.parse(storagedVideoList);
    }
    return [
      {
        id: {
          videoId: "11231",
        },
        snippet: {
          channelId: "12313",
          channelTitle: "Cazé",
          title: "Cazé",
          description: "HAUSHUSAHUDAS hhhd hhahashud hduasdhausdhasudas",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/an_webp/wDwZcajURR8/mqdefault_6s.webp?du=3000&sqp=CO_g9IwG&rs=AOn4CLAQBnfN2dK6KsOGI334VHrMwLwUYw",
            },
          },
          rating: 0,
        },
      },
      {
        id: {
          videoId: "11231",
        },
        snippet: {
          channelId: "12313",
          channelTitle: "Cazé",
          title: "Cazé",
          description: "HAUSHUSAHUDAS hhhd hhahashud hduasdhausdhasudas",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/an_webp/wDwZcajURR8/mqdefault_6s.webp?du=3000&sqp=CO_g9IwG&rs=AOn4CLAQBnfN2dK6KsOGI334VHrMwLwUYw",
            },
          },
          rating: 0,
        },
      },
      {
        id: {
          videoId: "11231",
        },
        snippet: {
          channelId: "12313",
          channelTitle: "Cazé",
          title: "Cazé",
          description: "HAUSHUSAHUDAS hhhd hhahashud hduasdhausdhasudas",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/an_webp/wDwZcajURR8/mqdefault_6s.webp?du=3000&sqp=CO_g9IwG&rs=AOn4CLAQBnfN2dK6KsOGI334VHrMwLwUYw",
            },
          },
          rating: 0,
        },
      },
      {
        id: {
          videoId: "11231",
        },
        snippet: {
          channelId: "12313",
          channelTitle: "Cazé",
          title: "Cazé",
          description: "HAUSHUSAHUDAS hhhd hhahashud hduasdhausdhasudas",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/an_webp/wDwZcajURR8/mqdefault_6s.webp?du=3000&sqp=CO_g9IwG&rs=AOn4CLAQBnfN2dK6KsOGI334VHrMwLwUYw",
            },
          },
          rating: 0,
        },
      },
      {
        id: {
          videoId: "11231",
        },
        snippet: {
          channelId: "12313",
          channelTitle: "Cazé",
          title: "Cazé",
          description: "HAUSHUSAHUDAS hhhd hhahashud hduasdhausdhasudas",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/an_webp/wDwZcajURR8/mqdefault_6s.webp?du=3000&sqp=CO_g9IwG&rs=AOn4CLAQBnfN2dK6KsOGI334VHrMwLwUYw",
            },
          },
          rating: 0,
        },
      },
      {
        id: {
          videoId: "11231",
        },
        snippet: {
          channelId: "12313",
          channelTitle: "Cazé",
          title: "Cazé",
          description: "HAUSHUSAHUDAS hhhd hhahashud hduasdhausdhasudas",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/an_webp/wDwZcajURR8/mqdefault_6s.webp?du=3000&sqp=CO_g9IwG&rs=AOn4CLAQBnfN2dK6KsOGI334VHrMwLwUYw",
            },
          },
          rating: 0,
        },
      },
    ];
  });

  const hasVideoList = videoList.length > 0;

  return (
    <Page>
      <Header hasVideoList={hasVideoList} />
      <Container hasVideoList={hasVideoList}>
        <Search hasVideoList={hasVideoList} setVideoList={setVideoList} />
        {hasVideoList && (
          <Content>
            <BandDetails />
            <Videolist videoList={videoList} />
          </Content>
        )}
        <GlobalStyle />
      </Container>
    </Page>
  );
};

const Page = styled.div`
  height: 100vh;
`;

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
