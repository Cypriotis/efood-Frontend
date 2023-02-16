import React, { useRef, useState, useEffect, useContext } from 'react';
import Register from "../components/Register";
import AuthContext from "../context/AuthProvider";
import useAuth from '../hooks/useAuth';
import AuthServiceSignIn from "../services/AuthServiceSignIn";
import {Link , useNavigate, useLocation, Route} from 'react-router-dom'
import axios from 'axios';
import UserService from '../services/UserService';
const LOGIN_URL = 'http://localhost:8080/api/auth/signin';



const SignInForm = () => {
    const { setAuth } = useAuth();


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";
    const userRef = useRef();
    const errRef = useRef();
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {

        console.log(email,password);
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                { username: email,
                password: password},
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            localStorage.setItem('token',accessToken);
            const roles = response?.data?.roles;
            localStorage.setItem('role',roles);
            setAuth({ email, password, roles, accessToken });
            setEmail('');
            setPassword('');
            navigate(from, { replace: true});

         //   <UserService auth={password} />
        } catch (err) {
            if (!err?.response) {
                setErrMsg('You signed in !');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    return (
       
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                          
                            <a href="/register">Sign Up</a>
                        </span>
                    </p>
                </section>
            )
        }

class Authfunction {
     getToken()
     {
        return this.accessToken;
     }
  }

export default SignInForm