import React, { useContext } from 'react'
import "./search.scss"
import { CiSearch } from "react-icons/ci";
import MainContext from '../../MainContext';

const Search = () => {
  const {search, setSearch}=useContext(MainContext)
  return (
    <div className='search'>
        <div className="icon"><CiSearch /></div>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Search Brands' />
    </div>
  )
}

export default Search