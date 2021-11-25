import {
  BandDetailsSearchProps,
  InfoSearchProps,
} from "../components/Dashboard/Dashboard";

export const YOUTUBE_API_MOCK: InfoSearchProps[] = [
  {
    id: {
      videoId: "1",
    },
    snippet: {
      channelId: "2",
      channelTitle: "Rammstein",
      title: "Rammstein - Deutchland (Official Video)",
      description: "New Album: https://www.rammstein.com",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/NeQM1c-XCDc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGzhewOrANO4fvR0JVH1rh2NhEyg",
        },
      },
      rating: 0,
    },
  },
  {
    id: {
      videoId: "3",
    },
    snippet: {
      channelId: "4",
      channelTitle: "Cazé",
      title: "Cazé",
      description:
        "Website: http://www.rammstein.com ▻ Shop: http://shop.rammstein.de Premiere: January 29, 2001 Shoot: 13th to 15th January, 2001 Location: Babelsberger ...",

      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/NeQM1c-XCDc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGzhewOrANO4fvR0JVH1rh2NhEyg",
        },
      },
      rating: 0,
    },
  },
];

export const TICKET_MASTER_API_MOCK: BandDetailsSearchProps = {
  _embedded: {
    attractions: [
      {
        id: "1",
        name: "Rammstein",
        extraLinks: {
          facebook: [
            {
              url: "https://www.facebook.com/Rammstein",
            },
          ],
          youtube: [
            {
              url: "https://www.youtube.com/user/rammsteintheband",
            },
          ],
          twitter: [
            {
              url: "https://twitter.com/RSprachrohr",
            },
          ],
        },
        images: [
          {
            url: "https://s1.ticketm.net/dam/a/dd1/9273b646-953f-467e-8e79-ec6eece1edd1_1267151_RECOMENDATION_16_9.jpg",
          },
          {
            url: "https://s1.ticketm.net/dam/a/dd1/9273b646-953f-467e-8e79-ec6eece1edd1_1267151_RETINA_LANDSCAPE_16_9.jpg",
          },
          {
            url: "https://s1.ticketm.net/dam/a/dd1/9273b646-953f-467e-8e79-ec6eece1edd1_1267151_TABLET_LANDSCAPE_16_9.jpg",
          },
          {
            url: "https://s1.ticketm.net/dam/a/dd1/9273b646-953f-467e-8e79-ec6eece1edd1_1267151_RETINA_PORTRAIT_3_2.jpg",
          },
        ],
        classifications: [
          {
            genre: {
              id: "1",
              name: "Rock",
            },
            subGenre: {
              id: "1",
              name: "Pop",
            },
          },
        ],
      },
    ],
  },
};
