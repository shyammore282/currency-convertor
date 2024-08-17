import "./App.css";
import Currency from "./components/currency-converter";
import ProgressBar from "./components/custom-progressBar/ProgressBar";
import Upload from "./components/file-upload/Upload";
import Filter from "./components/filter-products/Filter";

function App() {
  return (
    <>
      <Currency />
      <Filter />
      <ProgressBar />
      <Upload />
    </>
  );
}

export default App;
