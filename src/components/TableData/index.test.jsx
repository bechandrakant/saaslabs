import { render, screen } from "@testing-library/react";
import TableData from ".";

describe("Table Data component", () => {
  test("Data renders properly", () => {
    const dataToDisplay = [
      { label: "S.no.", key: "s.no" },
      { label: "Percentage funded", key: "percentage.funded" },
      { label: "Amount pledged", key: "amt.pledged" },
    ];
    const fundingData = {
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
    };
    render(
      <table>
        <tbody>
          <TableData fundingData={fundingData} dataToDisplay={dataToDisplay} />
        </tbody>
      </table>
    );

    const serialNumber = screen.getByText(fundingData["s.no"]);
    const percentageFunded = screen.getByText(fundingData["percentage.funded"]);
    const amountPledged = screen.getByText(fundingData["amt.pledged"]);
    expect(serialNumber).toBeInTheDocument();
    expect(percentageFunded).toBeInTheDocument();
    expect(amountPledged).toBeInTheDocument();
  });
});
