
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Inventory from './component/Inventory/Inventory';
import Products from './component/Products/Products';
import ManageInventory from './component/ManageInventory/ManageInventory';
import AddInventory from './component/AddInventory/AddInventory';
import MyItems from'./component/MyItems/MyItems';
import Blogs from './component/Blogs/Blogs';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:productId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
         <Route path='/manage' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
          <MyItems></MyItems>
          </RequireAuth>
        }></Route>
          <Route path='/addInventory' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer/>

    </div>
  );
}

export default App;
