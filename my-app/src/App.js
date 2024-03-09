import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/home/Home';
import Favorite from './Component/favorite/Favorite';
import Detail from './Component/detail/detail';
function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg' >

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/recipe-item/:id' element={<Detail />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
