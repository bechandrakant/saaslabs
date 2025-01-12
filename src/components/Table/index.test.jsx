import { render, screen } from "@testing-library/react";
import Table from ".";

describe("Table component", () => {
  test("Data renders properly", () => {
    const dataToDisplay = [
      { label: "S.no.", key: "s.no" },
      { label: "Percentage funded", key: "percentage.funded" },
      { label: "Amount pledged", key: "amt.pledged" },
    ];
    const fundings = [
      {
        "s.no": 0,
        "amt.pledged": 15823,
        blurb:
          "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
        by: "Museum of Science Fiction",
        country: "US",
        currency: "usd",
        "end.time": "2016-11-01T23:59:00-04:00",
        location: "Washington, DC",
        "percentage.funded": 186,
        "num.backers": "219382",
        state: "DC",
        title: "Catalysts, Explorers & Secret Keepers: Women of SF",
        type: "Town",
        url: "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery",
      },
    ];
    render(<Table fundings={fundings} dataToDisplay={dataToDisplay} />);

    const serialNumber = screen.getByText(fundings[0]["s.no"]);
    const percentageFunded = screen.getByText(fundings[0]["percentage.funded"]);
    const amountPledged = screen.getByText(fundings[0]["amt.pledged"]);
    expect(serialNumber).toBeInTheDocument();
    expect(percentageFunded).toBeInTheDocument();
    expect(amountPledged).toBeInTheDocument();
  });
});
