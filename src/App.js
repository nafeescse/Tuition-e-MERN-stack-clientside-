
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './pages/Homepage/Banner';
import Header from './pages/Header';
import Home from './pages/Homepage/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import AllTuitions from './pages/AllTuitions';
import AllTutors from './pages/AllTutors';

function App() {
  return (
    <div className="">
      <Header className=""></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/tuitions' element={<AllTuitions></AllTuitions>}></Route>
        <Route path='/tutors' element={<AllTutors></AllTutors>}></Route>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
