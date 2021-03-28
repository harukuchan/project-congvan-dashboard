import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header";
import Login from './Components/Login';
import SignUp from './Components/Signup';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import TestAxios from "./Components/TestAxios";
import Admin from "./Components/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/addproduct">
        <AddProduct />
      </Route>
      <Route path="/updateproduct">
        <UpdateProduct />
      </Route>
      <Route path="/testAxios">
        <TestAxios />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      </BrowserRouter>
      <BrowserRouter>

      </BrowserRouter>
    </div>
  );
}

export default App;
