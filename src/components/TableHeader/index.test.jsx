import { render, screen } from "@testing-library/react";
import TableHeader from ".";

describe("Table Header component", () => {
  test("Data renders properly", () => {
    const dataToDisplay = [
      { label: "S.no.", key: "s.no" },
      { label: "Percentage funded", key: "percentage.funded" },
      { label: "Amount pledged", key: "amt.pledged" },
    ];

    render(
      <table>
        <TableHeader dataToDisplay={dataToDisplay} />
      </table>
    );

    const serialNumber = screen.getByText("S.no.");
    const percentageFunded = screen.getByText("Percentage funded");
    const amountPledged = screen.getByText("Amount pledged");
    expect(serialNumber).toBeInTheDocument();
    expect(percentageFunded).toBeInTheDocument();
    expect(amountPledged).toBeInTheDocument();
  });
});
