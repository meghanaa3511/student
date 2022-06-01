import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'; 
import Home from './pages/Home/home.component';
import ListofCom from './pages/ListofCom/listofCom.component';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/list' element={<ListofCom />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
