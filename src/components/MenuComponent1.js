import React from "react";
import RestaurantMenuService from "../services/RestaurantMenuService1";
import UserService from "../services/UserService";
import Header from "./Header/header";
import $ from 'jquery';
import { useRef, useState, useEffect, useContext } from 'react';
import { AlertContainer, alert } from 'react-custom-alert';


import "./Header/header.css";
import { Alert } from "bootstrap";



var $x = $('tbody').find('tr').eq(1).find('input[type="checkbox"]');

var numb = 1;



class MenuComponent1 extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            menu:[]
        }
    }

    componentDidMount(){
        RestaurantMenuService.getMenu(numb).then((response) => {
            this.setState({ menu: response.data})
            const [id, setid] = useState('')
            
        });
    }

    

    render (){
        return (
            <div>
                <Header title="efoodHUA" subtitle="UserList" />
                <h1 source= "template.js" > </h1>
                <h1 className="text-center"> Catalog </h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                        <td> ItemName</td>
                        <td> Description</td>
                        <td> Price</td>
                        </tr>
                    </thead>
                    
                    <tbody>{
                        this.state.menu.map(
                            menu => 
                                <tr key = {menu.id}>
                                    <td> {menu.itemName}</td>
                                    <td> {menu.itemDescription}</td>
                                    <td> {menu.price}</td>
                                    <input type="checkbox" />
                                </tr>
                        )
                        }
                    </tbody>
                    <h4>
                    <button  className="makeOrder" >Make the order! </button>   
                    </h4>
                </table>
            </div>
        )
    }
}

export default MenuComponent1