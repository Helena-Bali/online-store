import React, {useEffect} from 'react'
import axios from 'axios'
import Header from '../header/header'
import Footer from './footer';
import ListOfProducts from './product-map-selector';


const Basket = () => {
  useEffect(() => {
    axios({
        method: 'post',
        url: 'api/v1/logs',
        data: {
          time: +new Date(),
          action: `navigate to /basket page`
        }
      }).catch((err) => console.log(err))
    return () => {}
}, [])
  return (
    <div>
      <Header />
      <ListOfProducts/>
      <Footer/>
    </div>
  )
}

export default Basket