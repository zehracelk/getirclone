import React, { useState } from 'react';
import Slider from "react-slick";
import { Button, Modal } from 'react-bootstrap';

import Login from  './Login'




import ReactFlagsSelect from 'react-flags-select';

export default function HeroSection() {
  const [selected, setSelected] = useState('US');

  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+6'
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  const [show,setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <div className="relative">
      
      <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:w-full before:h-full before:inset-0 before:z-10  ">
        <Slider {...settings}>
          <div>
            <img className="w-full h-[500px] object-cover " src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" alt="image1" />
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" alt="image1" />
          </div>
        </Slider>
        <div className=" flex justify-between items-center container absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
          <div>
            <img className="mx-64" src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />

            <h3 className="text-4xl mt-8 font-semibold text-white" >Dakikalar içinde <br /> kapınızda <br /> </h3>
          </div>
          <div className="w-[400px] rounded-lg bg-gray-50 p-6">
            <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>

            <div className="grid gap-y-3">
              <div className="flex gap-x-2">
                <ReactFlagsSelect

                  countries={Object.keys(phones)}
                  customLabels={phones}
                  onSelect={code => setSelected(code)}
                  selected={selected}
                  className="flag-select"
                />
                <label className="flex-1 relative block">
                  <input required className="h-14 px-4 border-2 border-gray-200 rounded transition-colors w-full
       hover:border-primary-brand-color focus:border-primary-brand-color text-sm pt2 outline-none peer"/>
                  <span className="absolute top-0 left-0 h-full px-4 flex items-center  text-sm 
      text-gray-500 transition-all peer-focus:h-7 peer-focus:text-xs peer-valid:text-xs peer-focus:text-primary-brand-color peer-valid:h-7 peer-valid:text-primary-brand-color ">Telefon Numarası</span>
                </label>
              </div>

              <button type="button" onClick={handleShow} className=" bg-brand-yellow h-12 flex items-center justify-center rounded-md font-semibold w-full text-primary-brand-color text-sm transition-colors hover:bg-primary-brand-color hover:text-brand-yellow "  data-toggle="modal">Telefon numarası ile devam et</button>
             

            </div>
          
          </div>
        

        </div>
      
       
      </div>
      <Modal show={show} onHide={handleClose} >
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Login />
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">
                        Close Modal
                    </Button>

                </Modal.Footer>
            </Modal>

    </div>
      </>


  )
}














