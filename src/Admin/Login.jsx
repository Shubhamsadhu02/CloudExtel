import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import Header from '../Partials/Header'

export default function Login() {
    return (
        <>
        <Header isWhite={false} />
            <section className='login vh-100' >
                <div className="container">
                    <div className="login-container">
                        <h2>Login</h2>
                        <form>
                            <div className="contactUs__inputs">
                                <label for="username">Username</label>
                                <input type="text" id="username" name="username" placeholder="Enter your username" required />
                            </div>
                            <div className="contactUs__inputs">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter your password" required />
                            </div>

                            <button type="submit">Login</button>
                        </form>

                        <hr />

                        <div className="text-center mt-4">
                            <h4>Login with Google</h4>
                            <div className="google__login">
                                <button >
                                    <FcGoogle size={30} className='mr-2' /> Login with Goggle
                                </button>
                            </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}
