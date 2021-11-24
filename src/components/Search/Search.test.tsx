import { fireEvent, render } from "@testing-library/react";
import { Search } from "../Search/Search";

describe("Search component", () => {
  const hasVideoList = false;
  const setVideoList = jest.fn();
  const setBandDetails = jest.fn();

  it('should have an "Search" button', () => {
    const { getByRole } = render(
      <Search
        hasVideoList={hasVideoList}
        setVideoList={setVideoList}
        setBandDetails={setBandDetails}
      />
    );
    expect(getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it('should be able to receive a handler for the "Search" button and execute it upon click', () => {
    const handleSearchSubmit = jest.fn();
    const { getByRole } = render(
      <Search
        hasVideoList={hasVideoList}
        setVideoList={setVideoList}
        setBandDetails={setBandDetails}
      />
    );

    const okButton = getByRole("button", { name: "Search" });

    fireEvent.click(okButton);

    expect(handleSearchSubmit).toBeCalled();
  });
});
