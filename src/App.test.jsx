import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders correctly", async () => {
    render(<App />);

    const rootDiv = screen.getByTestId("root-container");
    expect(rootDiv).toBeInTheDocument();

    const table = await screen.findByRole("table");
    expect(table).toBeInTheDocument();

    const nextButton = await screen.findByRole("button", { name: "Next" });
    const first = await screen.findByRole("button", { name: "1" });
    const second = await screen.findByRole("button", { name: "2" });

    expect(nextButton).toBeInTheDocument();
    expect(first).toBeInTheDocument();
    expect(first).toHaveClass("active");
    expect(second).toBeInTheDocument();
  });
});
