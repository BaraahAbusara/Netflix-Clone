
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
