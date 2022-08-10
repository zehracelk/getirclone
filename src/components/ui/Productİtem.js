import React from 'react';
import { FiPlus } from 'react-icons/fi';


export default function Productİtem({product}) {
    return (
        <div className="bg-white flex flex-col items-center text-center text-sm mx-auto  p-4 relative ">
            <button className="absolute top-3 right-3 rounded-lg items-center justify-center text-primary-brand-color font-semibold w-8 h-8 bg-white  border-gray-100 shadow-md">
                <  FiPlus size={16} /></button>
            <img className="w-[60px] h-[60px]" src={product.image} alt={product.title}/>
            <div className=" font-semibold text-brand-color">{product.price}</div>
            <div className=" font-semibold text-gray-800">{product.title}</div>
            <div className="text-gray-500 ">{product.alt}</div>
        </div>
    )
}
