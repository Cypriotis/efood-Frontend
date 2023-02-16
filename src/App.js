import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';
import RestaurantListPage from './components/RestaurantListPage';
import WelcomePage from './components/WelcomePage';
import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import Header from './components/Header/header';
import RestaurantMenuService from './services/RestaurantMenuService1';
import MenuComponent1 from './components/MenuComponent1';
import MenuComponent2 from './components/MenuComponent2';
import MenuComponent3 from './components/MenuComponent3';
import MenuComponent4 from './components/MenuComponent4';
import SignInForm from './components/SignInForm';
import Layout from './components/Layout';
import Unauthorized from './components/Unauthorized';
import RequireAuth from './components/RequireAuth';
import Editor from './components/Editors';
import Register from './components/Register';
import AddMenuItem from './components/AddMenuItem';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*Public Routes */}
        <Route path="login" element={<SignInForm />}/>
        <Route path="home" element={<WelcomePage />}/>
        <Route path="register" element={<Register />}/>
        <Route path="unauthorized" element={<Unauthorized />}/>
        
        <Route path="logout" element={<WelcomePage />}/>

        {/*Protected Routes*/}
          {/*admin*/}
            <Route element={<RequireAuth allowedRoles={["ROLE_ADMIN"]}  />}>
                  <Route path="customers" element={<UserComponent/>}/>
                  <Route path="menuItems" element={<AddMenuItem/>}/>

            </Route>
          {/*user*/}
            <Route element={<RequireAuth allowedRoles={["ROLE_USER","ROLE_ADMIN"]}/>}>
                  <Route path="restaurants" element={<RestaurantListPage/>}/>
                  <Route path="menu1" element={<MenuComponent1 />}/>
                  <Route path="menu2" element={<MenuComponent2 />}/>
                  <Route path="menu3" element={<MenuComponent3 />}/>
                  <Route path="menu4" element={<MenuComponent4 />}/>

            </Route>

            </Route>
    </Routes>
  );
}

export default App;
