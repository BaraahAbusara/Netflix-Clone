
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import Header from "./components/Header/Header";
import FavList from "./components/FavList/FavList";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

function App() {
  const [inHome, setinHome] = useState(true);
  const handleShow = () => { setinHome(!inHome) }

  return (
    <div className="App">
      <Header />
      <NavBar inHome={inHome} handleShow={handleShow}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/myFavMovies' element={<FavList/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
