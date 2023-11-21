
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Landingpage from './pages/Landingpage';
import Homepage from './pages/Homepage';
import Watchhistory from './pages/Watchhistory';


function App() {
  return (

    <>

    <Header/>
    <div className="Container m-5">

     <Routes>

      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/Watchhistory' element={<Watchhistory/>}/>
      

    
    

      </Routes>
      {/* <Homepage/> */}

      </div>
      <Footer/>

    </>
  );
}

export default App;
