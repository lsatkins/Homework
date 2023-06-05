import React from 'react';
import { Book } from './Book';
import './star.css';
import './pictureDisplay.css';

export const FirstSix = ({ data }) => {
  const slicedData = data.slice(0, 6); // Slice the array to get the first 6 elements

  return (
    <>
      <div className="row">
        {slicedData.map((bookObj) => {
          return (
            <div className="col-2 p-1 centered">
              <Book bookProp={bookObj} height="100%" width="98%" />
              <div className="smallFont w-80 text-white bg-success mt-2">Want to Read</div>
              <div className="star text-center">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export function English ({ data }) {
  let englishArr = [];
  data.forEach(book => {
    if (book.language == "English"){
        englishArr.push(book);
    }
  })
  const slicedData = englishArr.slice(0, 5); // Slice the array to get the first 5 elements

  return (
    <>
      <div className="row">
        {slicedData.map((bookObj) => {
          return (
            <div className="col p-1 centered">
              <Book bookProp={bookObj} height="" width="95%"/>
            </div>
          );
        })}
      </div>
    </>
  );
};

