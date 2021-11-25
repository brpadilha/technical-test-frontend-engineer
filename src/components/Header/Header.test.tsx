import { render } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  it("should render", () => {
    const { getByRole } = render(<Header />);
    expect(getByRole("header")).toBeInTheDocument();
  });

  it("should render a logo", () => {
    const { getByRole } = render(<Header />);
    expect(getByRole("logo")).toBeInTheDocument();
  });
});
