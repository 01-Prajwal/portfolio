import './App.css';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <div className="app">
          <Routes>
            <Route path="/" element={[<Navbar/>,<Home/>,<Footer/>]}/>
            <Route path="/about" element={[<Navbar/>,<About/>,<Footer/>]}/>
            <Route path="/Project" element={[<Navbar/>,<Project/>,<Footer/>]}/>


          </Routes>
      
    </div>
    </Router>
  );
}

export default App;
