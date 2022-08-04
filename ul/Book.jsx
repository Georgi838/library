import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    return (
        <div className="book">
        <Link to="/books/1">
            <figure className="book__image--wrapper">
                <img src={book.url} alt="" />
            </figure>
        </Link>
        <div className="book__title">
            <Link to="/books/1" className="book__title--link" >{book.title}</Link>
        </div>
        <div className="book__ratings">
        {new Array(Math.floor(book.rating)).fill(0).map((element, index) => element=<FontAwesomeIcon icon="star" key={index} /> )}
        {Number. isInteger(book.rating) ? " " : <FontAwesomeIcon icon="star-half-alt"  />}
        {/* alternative */}
        {/* !Number. isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt"  /> */}
        {/* if the first one is true only then do the second one basically */}
        </div>
        <div className="book__price">
            { book.salePrice ? (
               <>
                <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
                {book.salePrice.toFixed(2)}
                </> 
                ):(
             <>${book.originalPrice.toFixed(2)}</>
              )}
            
        </div>
    </div>
    );
}

export default Book;
