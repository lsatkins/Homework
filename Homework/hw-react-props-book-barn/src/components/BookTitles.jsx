import React from 'react'
import {BookTitle} from './Book'

const BookTitles = ({data}) => {

    const slicedArr = data.slice(0,40);
  
  
    return (
    <>
    <div className="row">

        {slicedArr.map(bookObj => {
            return <div className="col-6 p-1 text-success">

                <BookTitle bookProp={bookObj}/>

            </div>
        })}
    </div>
    </>
  )
}

export default BookTitles