import React from 'react'
import './pictureDisplay.css'

export const Book = ({bookProp,height,width}) => {
  return (
    <>

    <img height={height} width={width} src={"https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" + bookProp.imageLink}/>
    
    </>
  )
}
export function BookTitle({bookProp}) {
  return (
    <>

    <div className="bookTitle smallFont">{bookProp.title}</div>

    </>
  )
}

