import { render } from "@testing-library/react";
import { Search } from "../Search/Search";

describe("Header component", () => {
  const hasVideoList = false;
  const setVideoList = jest.fn();
  const setBandDetails = jest.fn();
  it("should render", () => {
    const { getByRole } = render(
      <Search
        hasVideoList={hasVideoList}
        setVideoList={setVideoList}
        setBandDetails={setBandDetails}
      />
    );
    expect(getByRole("search")).toBeInTheDocument();
  });
});
