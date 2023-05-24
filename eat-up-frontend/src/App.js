import Home from "./Component/Home/Home";
import Footer from "./Component/Shared/Footer/Footer";
import Navbar from "./Component/Shared/Navbar/Navbar";
import About from "./Component/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Contact from "./Component/Contact";
import Restuarant from './Component/Restuarant'


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/:restuarant' element={<Restuarant />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
