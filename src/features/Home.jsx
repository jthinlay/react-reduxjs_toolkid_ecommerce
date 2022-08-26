import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../features/narbar/Navbar'
import Slider from './slider/Slider'
import Categories from './category/Categorie'
import PopularProducts from '../features/products/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Counter from './counter/counter'
import styled from 'styled-components'

const Test = styled.div``
const Title = styled.h1``
const Home = () => {
  return (
    <div>
         <Test>
          <Title>test</Title>
          </Test>
        <Counter />
        <Navbar />
        <Announcement />
        <Slider />
        <Categories /> 
        <PopularProducts />
        <NewsLetter />
        <Footer />
    </div>
  )
}
export default Home
