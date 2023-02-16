import axios from "axios";
import React, { useContext } from "react";
import { useActionData } from "react-router";
import SignInForm from "../components/SignInForm";
import AuthContext from "../context/AuthProvider";

import useAuth from "../hooks/useAuth";




const USERS_REST_API_URL = 'http://localhost:8080/customers';


const token = localStorage.getItem('token');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

class UserService {

  

    getUsers(){
        return axios.get(USERS_REST_API_URL,{
                  //  headers: { 'Content-Type': 'application/json'},
                  headers: { Authorization: `Bearer ${token}` },
                    withCredentials: false,
                    
                });

    }
}

export default new UserService()