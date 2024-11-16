import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNavbar = () => {
const [category, setCategory]=useState([]);
useEffect(()=>{
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res=>res.json())
    .then(data=>setCategory(data.data.news_category
    ))
},[])

    return (
        <div>
            <h2 className="font-semibold mb-4">All Caterogy({category.length})</h2>
            <div className="flex flex-col gap-2">
                {
                category.map((category) =>( 
               <NavLink to={`/category/${category.category_id}`}>
                 <button className="btn bg-transparent border-none w-full" key={category.category_id}>{category.category_name}</button> 
               </NavLink>
            ))}
            </div>
        </div>
    );
};

export default LeftNavbar;