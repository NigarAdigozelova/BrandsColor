import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import MainContext from "../MainContext";
import LazyLoad from "react-lazyload";
import Download from "./Download";
import Brand from "./Brand/Brand";
import Search from "./Search/Search";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Collections = () => {
  const { setSelectedBrands, brands, selectedBrands } =
    React.useContext(MainContext);
  const { slug } = useParams();
  const navigate = useNavigate();
  const clearSelectedBrands = () => {
    setSelectedBrands([]);
    navigate("/");
  };

  console.log("Slug parts:", slug);
  useEffect(() => {
    setSelectedBrands(slug.split(","));
  }, [slug]);

  return (
    <div className="heroPage">
      <header>
        <Link to="/" onClick={clearSelectedBrands}>
          <a className="back">
            <IoIosArrowBack />
            Go back
          </a>
        </Link>
        <Search />
        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className="brands">
        {selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);

          return (
            <LazyLoad once={true} overflow={true} placeholder={"Loading..."}>
              <Brand key={brand.id} brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
    </div>
  );
};

export default Collections;
