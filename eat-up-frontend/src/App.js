import Home from "./Component/Home/Home";
import Footer from "./Component/Shared/Footer/Footer";
import Navbar from "./Component/Shared/Navbar/Navbar";
import About from "./Component/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
