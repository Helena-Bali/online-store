import React from 'react'
import Header from '../header/header'
import Footer from './footer';
import ListOfProducts from './product-map-selector';


const Basket = () => {
  return (
    <div>
      <Header />
      <ListOfProducts/>
      <Footer/>
    </div>
  )
}

export default Basket