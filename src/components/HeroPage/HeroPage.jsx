import React, { useContext } from "react";
import "./heroPage.scss";
import Search from "../Search/Search";
import Brand from "../Brand/Brand";
import MainContext from "../../MainContext";
import LazyLoad from 'react-lazyload';
import Download from "../Download";

const HeroPage = () => {
const {brands,selectedBrands}=useContext(MainContext)
  
  return (
    <div className="heroPage">
      <header>
        <Search />
        <Download/>
      </header>
      <section className="brands">
        {brands.map(brand =>(
          <LazyLoad once={true} overflow={true} placeholder={"Loading..."}>
          <Brand brand={brand}/>
          </LazyLoad>
        ))}

      </section>
    </div>
  );
};

export default HeroPage;
