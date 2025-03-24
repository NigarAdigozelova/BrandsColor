import { useEffect, useState } from "react";
import "./App.css";
import HeroPage from "./components/HeroPage/HeroPage";
import MainContext from "./MainContext";
import Sidebar from "./components/Sidebar/Sidebar";
import BrandsData from "./brands.json";
import Copied from "./components/Copied";
import Collections from "./components/Collections";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const brandsArray = [];
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    copied,
    setCopied,
    search,
    setSearch,
  };
  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) => brand.title.toLowerCase().includes(search))
    );
  }, [search]);
  return (
    <div className="App">
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        {/* <HeroPage /> */}
        <Router>
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/collection/:slug/*" element={<Collections />} />
            </Routes>
        </Router>
      </MainContext.Provider>
    </div>
  );
}

export default App;
