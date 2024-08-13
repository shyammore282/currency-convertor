import "./App.css";
import Currency from "./components/currency-converter";
import ProgressBar from "./components/custom-progressBar/ProgressBar";
import Filter from "./components/filter-products/Filter";

function App() {
  return (
    <>
      <Currency />
      <Filter />
      <ProgressBar />
    </>
  );
}

export default App;
