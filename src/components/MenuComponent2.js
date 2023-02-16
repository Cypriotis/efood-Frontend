import React from "react";
import RestaurantMenuService from "../services/RestaurantMenuService1";
import UserService from "../services/UserService";
import Header from "./Header/header";
var numb = 2;

class MenuComponent2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menu:[]
        }
    }

    componentDidMount(){
        RestaurantMenuService.getMenu(numb).then((response) => {
            this.setState({ menu: response.data})
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
                                </tr>
                        )
                        }
                    </tbody>
                    
                
                </table>
            </div>
        )
    }
}

export default MenuComponent2