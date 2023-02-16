import React from "react";
import "./header.css";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';

import RestaurantListPage from "../RestaurantListPage"
import UserComponent from "../UserComponent";



export default function Header(props) {
  return (
    <div>
     <Link to="/home" className="headerText"><img src="images/efood.png" alt=""  /></Link>
     <Link to="/restaurants" className="headerRest"><img src="images/order.png" alt="" /></Link>
     <Link to="/login" className="headerRest2"><img src="images/signin.png" alt=""/></Link>
    </div>
    

    
  );
}
