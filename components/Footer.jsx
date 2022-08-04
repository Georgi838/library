import React from 'react';
import { Link } from 'react-router-dom';
import FooterImg from '../assets/Library.svg'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                    <figure className="footer__logo">
                        <img src={FooterImg} alt="" className="footer__logo--img" />
                    </figure>
                    </Link>
                    <ul className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <span className="footer__link no-cursor">About</span>
                        <Link to="/books" className="footer__link">Books</Link>
                        <Link to="/cart" className="footer__link">Cart</Link>
                    </ul>
                    <div className="footer__copyright">© Copyright 2022 Georgi ivanov</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
