import { render, screen } from "@testing-library/react";
import Pagination from ".";

describe("Pagination component", () => {
  test("all buttons are displayed", () => {
    render(
      <Pagination currentPage={2} setCurrentPage={() => {}} totalPage={5} />
    );

    const previousButton = screen.getByRole("button", { name: "Previous" });
    const nextButton = screen.getByRole("button", { name: "Next" });
    const first = screen.getByRole("button", { name: "1" });
    const second = screen.getByRole("button", { name: "2" });
    const third = screen.getByRole("button", { name: "3" });
    const fourth = screen.getByRole("button", { name: "4" });
    const fifth = screen.getByRole("button", { name: "5" });
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(first).toBeInTheDocument();
    expect(second).toBeInTheDocument();
    expect(second).toHaveClass("active");
    expect(third).toBeInTheDocument();
    expect(fourth).toBeInTheDocument();
    expect(fifth).toBeInTheDocument();
  });

  test("No previous button if first page", () => {
    render(
      <Pagination currentPage={1} setCurrentPage={() => {}} totalPage={5} />
    );

    const previousButton = screen.queryByRole("button", {
      name: "Previous",
    });
    expect(previousButton).not.toBeInTheDocument();
  });

  test("No next button if last page", () => {
    render(
      <Pagination currentPage={5} setCurrentPage={() => {}} totalPage={5} />
    );

    const nextButton = screen.queryByRole("button", {
      name: "Next",
    });
    expect(nextButton).not.toBeInTheDocument();
  });
});
