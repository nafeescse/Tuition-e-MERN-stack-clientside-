
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './pages/Banner';
import Header from './pages/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
