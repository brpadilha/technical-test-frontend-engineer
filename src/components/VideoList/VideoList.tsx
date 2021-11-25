import { InfoSearchProps } from "../Dashboard/Dashboard";
import { Container, Content, Description, TextContent, Title } from "./styles";

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
