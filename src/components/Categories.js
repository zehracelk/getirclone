import { useState,useEffect } from "react";
import categoryData from "../api/categories.json";
import Category from "./ui/category";




export default function Categories() {
 
    const [categories,setCategories] = useState ([]);

    useEffect(() => {

        setCategories(categoryData)

    },[])

    return(
        <div className="bg-white py-4">
            <div className="container mx-auto ml-72">
            <h6 className="text-sm font-semibold mb-3">Kategoriler</h6>
            <div className="grid grid-cols-10 mr-60">
                {categories && categories.map((category,index) => <Category key={index} category={category}/>)}


            </div>
            </div>
        
        </div>
    )
}