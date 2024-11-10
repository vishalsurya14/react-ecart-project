import React, { useState } from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { items } from "./Data";
import { BsCartCheckFill } from "react-icons/bs";

const Navbar = ({setData, cart}) => {
  const location = useLocation() // new learning. It gives the path. It's an object.
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const filterByCategory=(category)=>{
    const element = items.filter((product)=> product.category === category); // for comparing use '=='
    // '=' use to assign value . '===' used to compare data-type as well as value.
    //console.log(element)
    setData(element);
  }


const filterByPrice=(price)=>{
  const element = items.filter((product)=>product.price >= price);
  //console.log(element)
  setData(element);
}

const handleSubmit=(e)=>{
  e.preventDefault(); // used to stop the reloading of page after form submission.
  navigate(`/search/${searchTerm}`) 
  setSearchTerm("");
}

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={'/'} className="brand">E-Cart</Link>
          <form onSubmit ={handleSubmit} className="search-bar">
            <input type="text"
             placeholder="Search Products"
             value={searchTerm}
             onChange={(e)=>setSearchTerm(e.target.value)} />
          </form>
          <Link to={'/cart'} className="cart">
          <button type="button" className="btn btn-primary position-relative">
          <BsCartCheckFill />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
  </span>
</button>
          </Link>
        </div>
        {
          location.pathname =='/' && (
            <div className="nav-bar-wrapper">
          <div className="items cursor-pointer">Filter by {"->"}</div>
          <div className="items cursor-pointer" onClick={()=>setData(items)}>No Filter</div>
          <div className="items cursor-pointer" onClick={()=>filterByCategory('mobiles')}>Mobiles</div>
          <div className="items cursor-pointer" onClick={()=>filterByCategory('laptops')}>Laptop</div>
          <div className="items cursor-pointer" onClick={()=>filterByCategory('tablets')}>Tablets</div>
          <div className="items cursor-pointer" onClick={()=>filterByPrice(29000)}>{">=29000"}</div>
          <div className="items cursor-pointer" onClick={()=>filterByPrice(49000)}>{">=49000"}</div>
          <div className="items cursor-pointer" onClick={()=>filterByPrice(69000)}>{">=69000"}</div>
          <div className="items cursor-pointer" onClick={()=>filterByPrice(89000)}>{">=89000"}</div>
        </div>
          )
        }
        
      </header>
    </>
  );
};

export default Navbar;
