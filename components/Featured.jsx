import React from 'react';
import Book from '../ul/Book';
import {books} from '../data';

const Featured = () => {
    return (
        <section id="featured">
             <div className="container">
               <div className="row">
                 <h2 className="section__title">
                    Featured <span className="purple">Books</span>
                 </h2>
                 <div className="books">
                 {
                 books.filter(book => book.rating === 5 )
                 .slice (0, 4)
                 .map((books) => (
                 <Book book={books} key={books.id}/>
                  ))}
                  
                 </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
