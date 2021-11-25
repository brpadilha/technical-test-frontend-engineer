import { render } from "@testing-library/react";
import { TICKET_MASTER_API_MOCK } from "../../utils/mocks";
import { BandDetails } from "./BandDetails";

describe("BandDetails component", () => {
  it("should render component", () => {
    const { getByRole } = render(
      <BandDetails bandDetails={TICKET_MASTER_API_MOCK} />
    );

    expect(getByRole("band-details")).toBeTruthy();
  });

  it("should render a title with that the name of the band is Rammstein", () => {
    const { getByText } = render(
      <BandDetails bandDetails={TICKET_MASTER_API_MOCK} />
    );

    expect(getByText("Rammstein")).toBeTruthy();
  });
});
