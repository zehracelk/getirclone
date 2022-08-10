
import React, { Component } from "react";
import Slider from "react-slick";

export default function Campaigns() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 35000,
    cssEase: "linear",
    arrows:false
  };
    return(
   
     <>
     <div className="container ml-72  ">
        <h6 className="mx-auto font-semibold text-sm ">Kampanyalar</h6>
        </div>
        
        <div className="flex container ml-72 ">
          <button>
          <img className="w-[400px] h-[200px] rounded-lg mr-4 mx-auto " src="https://cdn.getir.com/misc/6069cee3f7be2b6472dc8b5f_banner_tr_1629921878792.jpeg"/>
          </button>
         
          
          <div className=" before:absolute w-[400px] before:w-[400px] before:h-full before:inset-0 ">
          <Slider {...settings}>
          <div>
          <img className="w-[400px] h-[200px] rounded-lg object-cover" src="https://cdn.getir.com/misc/611e6791d987aecbd2bff91f_banner_tr_1629382671447.jpeg"/>
          </div>
          <div>
          <img className="w-[400px] h-[200px] rounded-lg object-cover " src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg"/>
          </div>

          </Slider>
          </div>

       </div>
       </>
       
    )
}  