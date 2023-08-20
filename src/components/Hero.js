import React from 'react'
import './hero.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Data/Product';
import {productData, responsive} from './Data/Data'
const Hero = () => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
   
  return (
    <>
      <section className='container'>
        <img  src='https://dummyimage.com/600x400/3250d6/f7f7f7&text=Dummy+Image' alt='hero img'/>
        <button className='btn-shop'>Shop Now</button>
      </section>
      <div className="carousel">
      <h1>Hero Poducts</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
      
    </>
  )
}

export default Hero