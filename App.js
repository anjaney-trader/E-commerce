
import './App.css';
import Nav from "./component/Nav";
import { BrowserRouter ,Route,Routes} from 'react-router-dom';

import SignUp from './component/SignUp';
import Footer from './component/Footer';
 import PrivateComponent from './component/PrivateCompoonent';
 import Login from './component/Login';
 import AddProduct from './component/Addproduct';
 import ProductList from './component/ProductList';
 import UpdateProduct from "./component/UpdateProduct"
 

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route  element ={<PrivateComponent/>}>
        <Route path ="/" element= {<ProductList/>}/>
        <Route path ="/add" element= {<AddProduct/>}/>
        <Route path ="/update:id" element= {<h1>{<UpdateProduct/>}</h1>}/>
        <Route path ="/logout" element= {<h1>LOGOUT</h1>}/>
        <Route path ="/profile" element= {<h1>PROFILE</h1>}/>
        <Route path ="/login"  element ={<Login/>}/>
        </Route>
        <Route path ="/signup" element ={<SignUp/>}/>
        
      </Routes>
      

      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
