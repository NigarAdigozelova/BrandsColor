import React, { useContext, useEffect } from "react";
import MainContext from "../MainContext";
import { IoMdClose } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { HiLink } from "react-icons/hi";
import { Link } from "react-router-dom";

const Download = () => {
  const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext);
  const [donwloadUrl, setDonwloadUrl] = React.useState();
  const [cssMethod, setCssMethod] = React.useState("css");

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = "";

      switch (cssMethod) {
        case "css":
          selectedBrands.forEach((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            if (brand) {
              brand.colors.forEach((color, key) => {
                output += `--${slug
                  .replace(/^[0-9]/, "_")
                  .replace(/[^a-zA-Z0-9_-]/g, "_")}-${key}: #${color};\n`;
              });
            }
          });
          output = `:root {\n${output}}\n`; // Wrap variables inside :root
          break;

        case "scss":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `$${slug.replace(
                /[^a-zA-Z_]/g,
                "_"
              )}_${key}: #${color};\n`; // replace special characters with _
            });
          });
          break;
        case "less":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `@${slug}-${key}:#${color};\n`;
            });
          });
          break;
      }

      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDonwloadUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setDonwloadUrl("");
      };
    }
  }, [selectedBrands, cssMethod]);
  // const getLink = () => {
  //   prompt(
  //     "Here's the URL to share",
  //     `http://localhost:3000/collection/${selectedBrands.join(",")}`
  //   );
  // };

  return (
    <div className="download">
      <div className="actions">
        <select onChange={(e) => setCssMethod(e.target.value)}>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a download={`brands.${cssMethod}`} href={donwloadUrl}>
          <IoMdDownload />
        </a>

        <Link to={`/collection/${selectedBrands.join(",")}`}>
          <HiLink />
        </Link>
      </div>
      <div
        className="selected"
        onClick={() => {
          setSelectedBrands([]);
        }}
      >
        <IoMdClose />
        {selectedBrands.length} brands collected
      </div>
    </div>
  );
};

export default Download;
