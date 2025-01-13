import "./App.css";
import { useState, useEffect } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

const URL = `https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json`;
const contentPerPage = 5;

function App() {
  const [fundings, setFundings] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const dataToDisplay = [
    { label: "S.no.", key: "s.no" },
    { label: "Percentage funded", key: "percentage.funded" },
    { label: "Amount pledged", key: "amt.pledged" },
  ];

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setFundings(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 className="loading">Loading...</h3>;
  }

  if (error) {
    return <h3 className="error">Error fetching data, please try again</h3>;
  }

  const currentFundingSlice = fundings
    ? fundings.slice(
        (currentPage - 1) * contentPerPage,
        (currentPage - 1) * contentPerPage + contentPerPage
      )
    : [];

  return (
    <div className="App" data-testid="root-container">
      {currentFundingSlice && (
        <>
          <Table fundings={currentFundingSlice} dataToDisplay={dataToDisplay} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={Math.ceil(fundings.length / contentPerPage)}
          />
        </>
      )}
    </div>
  );
}

export default App;
