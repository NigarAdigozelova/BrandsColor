import React, { useContext } from "react";
import "./brand.scss";
import { getContrastYIQ } from "../../Helpers";
import MainContext from "../../MainContext";
import ClipboardButton from "react-copy-to-clipboard";
// import ClipboardButton from "react-clipboard.js";
const Brand = ({ brand, color }) => {
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };
  const handleCopy = (text) => {
    setCopied(text.replace("#", "")); // Store color code without #
    
    setTimeout(() => {
      setCopied(null); // Hide copied message after 3 seconds
    }, 3000);
  };
  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
    >
      <h5 onClick={toggleSelected}>{brand.title}</h5>
      <div className="brands-color">
        {brand.colors.map((color) => (
          <ClipboardButton text={`#${color}`} onCopy={(text) => handleCopy(text)} key={color}>
            <span style={{ backgroundColor: `#${color}` }}>{color}</span>
          </ClipboardButton>
        ))}
      </div>
    </div>
  );  
};

export default Brand;
