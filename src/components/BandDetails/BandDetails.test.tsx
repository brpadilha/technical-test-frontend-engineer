import { getByTestId, render } from "@testing-library/react";
import { TICKET_MASTER_API_MOCK } from "../../utils/mocks";
import { BandDetails } from "./BandDetails";

describe("BandDetails component", () => {
  it("Should render component", () => {
    const { getByRole } = render(
      <BandDetails bandDetails={TICKET_MASTER_API_MOCK} />
    );

    expect(getByRole("band-details")).toBeTruthy();
  });
});
