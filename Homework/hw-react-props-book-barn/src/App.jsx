import React from 'react'
import Navbar from'./components/Navbar'
import Search from './components/Search'
import {FirstSix, English} from './components/BookList'
import BookTitles from './components/BookTitles'
import dataFile from './data/bookData'
import './components/footerLink.css'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row topAdd">Top Add</div>
          <div className="row">
            <div className="col-8 p-2">
              <div className="row m-2 h5">Genres</div>
              <div className="row"><Search/></div>
              <div className="row mt-2">BEST BOOKS OF THE MONTH: OCTOBER 2018<hr></hr></div>
              <div className="row"><FirstSix  data={dataFile}/></div>
              <div className="row footer">More News & Interviews ...</div>
              <div className="row">ENGLISH<hr></hr></div>
              <div className="row"><English  data={dataFile}/></div>
              <div className="row footer">More fiction...</div>
            </div>
            <div className="col-4 marginTop">
              <div className="row rightAdd">Right Add</div>
              <div className="row m-2 h6">Browse</div>
              <hr></hr>
              <BookTitles data={dataFile}/>
              <div className="row footer">More titles...</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
