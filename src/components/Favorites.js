
import Products from '../api/products.json';
import { useEffect,useState } from 'react';
import Productİtem from './ui/Productİtem';
import { BsPlus } from 'react-icons/bs';


export default function Favorites() {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        setProducts(Products);
    },[])
 
    return(
        <div >
            <h6 className="font-semibold  text-sm ">Favoriler</h6>
            <div className=" grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
            {products.length && products.map((product, index) => <Productİtem key={index} product={product}/>)}

            </div>
         </div>
    )
}