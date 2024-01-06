import React from 'react'
import Footer from "../Footer/Footer"
import TopNews from './TopNews'
import CategoryNews from './CategoryNews'
import MainNews from './MainNews'
import NewsNavbar from '../Navbar/NewsNavbar'
import Newshero from './Newshero'

const News = () => {
  return (
    <>
  <div className='newspage'>
    <NewsNavbar/>
    <Newshero/>
    {/* <TopNews/> */}
    <CategoryNews/>
    <MainNews/>
    <Footer/>
    </div>
    </>
  )
}

export default News
