import React, { useState, useContext } from 'react'
import Header from '../Partials/Header'
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //* Login Function
    const login = async () => {
        if(!email || !password) {
            return toast.error("Fill all required fields")
        }
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const result = userCredential.user;
            console.log(result);
            toast.success('Login Success');
            localStorage.setItem('admin', JSON.stringify(result));
            navigate('/dashboard');
        } catch (error) {
            toast.error('Login Failed');
            console.log(error);
        }
    }
    return (
        <>
            <Header isWhite={false} />
            <section className='login vh-100' >
                <div className="container">
                    <div className="login-container">
                        <h2>Admin Login</h2>
                        <form>
                            <div className="contactUs__inputs">
                                <label for="email">Email Id</label>
                                <input type="email" placeholder="Enter your email" 
                                name="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} required />
                            </div>
                            <div className="contactUs__inputs">
                                <label for="password">Password</label>
                                <input type="password" placeholder="Enter your password" 
                                name='password'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)} required />
                            </div>

                            <button onClick={login}>Login</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
