import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Header/About/About';
import Dashbord from './Components/Header/Dashbord/Dashbord';
import Header from './Components/Header/Header';
import Home from './Components/Header/Home/Home';
import Review from './Components/Header/Review/Review';


function App() {
  return (
    <div className="App">
  
   <Header></Header>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="review" element={<Review />} />
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="about" element={<About />} />
      </Routes>


     
    </div>
  );
}

export default App;
