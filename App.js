import './index.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import { books } from './data';
import BookInfo from './pages/BookInfo';

function App(){
  
  return (   
    <Router>
    <Nav />
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/books"  element = {() => <Books books={books} />} />
    <Route path="/books/1" element={() => <BookInfo books={books} /> } />
    </Routes>
    <Footer />
    </Router>
  );
}


export default App;