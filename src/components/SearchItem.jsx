import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
// while using useParams(), we must use the same variable name as we have passed, when we created dynamic routes.
// use params is an object.

const SearchItem = ({cart,setCart}) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const data = items.filter((p) =>
      p.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilterData(data);
  }, [term]);

  return<Product cart={cart} setCart={setCart} items={filterData}/>
};

export default SearchItem;
