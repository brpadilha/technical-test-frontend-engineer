import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { Search } from "../Search/Search";
import { BandDetails } from "../BandDetails/BandDetails";
import { TICKET_MASTER_API_MOCK } from "../../utils/mocks";

describe("Dashboard component", () => {
  const hasVideoList = false;
  const setVideoList = jest.fn();
  const setBandDetails = jest.fn();
  it("should render search component", () => {
    const { getByRole } = render(
      <Search
        hasVideoList={hasVideoList}
        setVideoList={setVideoList}
        setBandDetails={setBandDetails}
      />
    );
    expect(getByRole("search")).toBeInTheDocument();
  });
  it("should search a band named Rammstein and render a title with Rammstein", () => {
    const { getByRole } = render(
      <Search
        hasVideoList={hasVideoList}
        setVideoList={setVideoList}
        setBandDetails={setBandDetails}
      />
    );

    const { getByText } = render(<BandDetails band={TICKET_MASTER_API_MOCK} />);
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, {
      target: { value: "Rammstein" },
    });

    fireEvent.click(getByRole("button", { name: "Search" }));
    expect(getByText("Rammstein")).toBeInTheDocument();
  });
});
