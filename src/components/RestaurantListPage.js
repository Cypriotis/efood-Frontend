import React from "react";
import Header from "./Header/header";
import RestaurantService from "../services/RestaurantService";
import {BrowserRouter as Router, Link} from "react-router-dom";



class RestaurantListPage extends React.Component{

 

     store1() {
        const style = {
            "backgroundImage": `url("images/store1.png")`,
            "backgroundRepeat": "no-repeat",
            position: "absolute",
            height: "100%",
            width: "100%",
            scale: "100%",
            top: "150px",
            left: "100px"
        }
        return <div style={style}></div>
    }
    store2() {
        const style = {
            "backgroundImage": `url("images/store2.png")`,
            "backgroundRepeat": "no-repeat",
            position: "absolute",
            height: "100%",
            width: "100%",
            scale: "100%",
            top: "150px",
            left: "500px"
        }
        return <div style={style}></div>
    }
    store3() {
        const style = {
            "backgroundImage": `url("images/store3.png")`,
            "backgroundRepeat": "no-repeat",
            position: "absolute",
            height: "100%",
            width: "100%",
            scale: "100%",
            top: "150px",
            left: "900px"
        }
        return <div style={style}></div>
    }
    store4() {
        const style = {
            "backgroundImage": `url("images/store4.png")`,
            "backgroundRepeat": "no-repeat",
            position: "absolute",
            height: "100%",
            width: "100%",
            scale: "100%",
            top: "150px",
            left: "1300px"
        }
        return <div style={style}></div>
    }
    

    render (){
        return (
            <div>
                <Header />
                <Link to="/menu1"><this.store1/></Link> 
                <Link to="/menu2"><this.store2/></Link>
                <Link to="/menu3"><this.store3/></Link>
                <Link to="/menu4"><this.store4/></Link>
              
                <h1 className="text-center" >  </h1>
                                                                           {/* <table className = "table table-striped">
                                                                                        <thead>
                                                                                            <tr>
                                                                                            <td> RestaurantID Id</td>
                                                                                            <td> Restaurant</td>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>{
                                                                                            this.state.restaurants.map(
                                                                                                restaurant => 
                                                                                                    <tr key = {restaurant.id}>
                                                                                                        <td> {restaurant.id}</td>
                                                                                                        <td> {restaurant.restaurantName}</td>
                                                                                                    </tr>
                                                                                            )
                                                                                            }
                                                                                        </tbody>
                                                                                        </table>*/}

            </div>
        )
    }

}

export default RestaurantListPage