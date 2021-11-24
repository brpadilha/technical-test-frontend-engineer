import { render } from "@testing-library/react";
import { YOUTUBE_API_MOCK } from "../../utils/mocks";
import { VideoList } from "./VideoList";

describe("VideoList component", () => {
  it("should render component", () => {
    const { getByRole } = render(<VideoList videoList={YOUTUBE_API_MOCK} />);
    expect(getByRole("video-list")).toBeInTheDocument();
  });
});
