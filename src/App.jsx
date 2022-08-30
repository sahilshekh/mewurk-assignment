import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home.jsx"
import ContactsPage from './components/Contacts Page/ContactsPage';
import Navbar from './components/navbar/Navbar';
import { Routes ,Route} from 'react-router-dom'
import Login from './components/login/LoginUI';

function App() {
  return (
    <div className="App">
    <Navbar/>
    
    {/* <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/contactpage' element={<ContactsPage/>}/>
     </Routes> */}
    

    <Login/>
    </div>
  );
}

export default App;
