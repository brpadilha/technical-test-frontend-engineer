import React, { FormEvent, useState } from "react";
import api from "./services/api";
import styled from "styled-components";

export const Search = styled.form<{
  hasList: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.hasList ? "100vh" : "10vh")};
  background-color: blue;
`;

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [videoList, setVideoList] = useState<
    {
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
    }[]
  >(() => {
    const storagedVideoList = localStorage.getItem("@videoList");

    if (storagedVideoList) {
      return JSON.parse(storagedVideoList);
    }
    return [];
  });

  let youTubeUrl =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10";
  const queryString = "";
  const maxResults = 20;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await api.get(
        `${youTubeUrl}&maxResults=${maxResults}&q=${search}&type=video&key=${process.env.GOOGLE_API_KEY}`
      );
      console.log(response.data.items);
      setVideoList(response.data.items);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Search onSubmit={handleSubmit} hasList={videoList.length <= 0}>
        <input
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </Search>
      <div>
        {videoList.map((video) => (
          <div key={video.id.videoId}>
            <h2>{video.snippet.title}</h2>
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
              />
            </a>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
