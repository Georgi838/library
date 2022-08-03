import './index.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Books from './pages/Books';
import { books } from './data';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
    <Route path="/" exact component={Home} />
    <Route path="/books"  render = {() => (<Books books={books} />)}/>
    <Footer />
    </div>
    </Router>
  );
}

export default App;