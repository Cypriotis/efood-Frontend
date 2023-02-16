import { render } from "@testing-library/react";
import React from "react";
import UserService from "../services/UserService";
import Header from "./Header/header";




class UserComponent extends React.Component{


  

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response)=> {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <Header title="efoodHUA" subtitle="UserList" />
                <h1 source= "template.js" > </h1>
                <h1 className="text-center"> UsersList </h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                        <td> User Id</td>
                        <td> Fist Name</td>
                        <td> Last Name</td>
                        <td> Email</td>
                        <td> Password</td>
                        <td> Phone </td>
                        </tr>
                    </thead>
                    <tbody>{
                        this.state.users.map(
                            user => 
                                <tr key = {user.id}>
                                    <td> {user.id}</td>
                                    <td> {user.firstName}</td>
                                    <td> {user.lastName}</td>
                                    <td> {user.email}</td>
                                    <td> {user.password}</td>
                                    <td> {user.phone}</td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user.id)} 
                                        href="http://localhost:3000/customers" >Delete</button>
                                    </td>
                                </tr>
                        )
                        }
                    </tbody>
                </table>

            </div>
        )
    }

}

const token = localStorage.getItem('token');

const handleDeleteUser=async(userid) =>{
    const response = await fetch(`http://localhost:8080/customers/${userid}`,{
        method: "DELETE",headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
        alert("User Deleted")}).catch(error => {alert("Problem accured")})
    };

    
    


export default UserComponent