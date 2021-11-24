import { darken } from "polished";
import styled from "styled-components";
import { InfoSearchProps } from "../Dashboard/Dashboard";

type VideoListProps = {
  videoList: Array<InfoSearchProps>;
};

export const VideoList = ({ videoList }: VideoListProps) => {
  return (
    <Container role="video-list">
      {videoList.map((video: InfoSearchProps) => (
        <Content key={video.id.videoId}>
          <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            />
          </a>
          <TextContent>
            <Title>{video.snippet.title}</Title>
            <Description>{video.snippet.description}</Description>
          </TextContent>
        </Content>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 1rem;
  overflow-y: scroll;
  height: 80vh;
  width: 50vw;

  @media (max-width: 770px) {
    width: fit-content;
  }

  @media (max-width: 375px) {
    width: fit-content;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  transition: background-color 0.2s;

  :hover {
    background-color: ${darken(0.05, "#e6e6e6")};
  }

  a {
    margin: 1rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1;
`;

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-right: 1rem;
`;
