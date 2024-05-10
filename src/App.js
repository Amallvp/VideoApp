
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Landingpage from './Pages/Landingpage';
import Watchhistory from './Pages/Watchhistory';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='' element={<Landingpage></Landingpage>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/watch-history' element={<Watchhistory></Watchhistory>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
