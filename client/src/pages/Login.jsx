import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";

export const Login = () => {
    const[user,setUser] = useState({
        email :"",
        password :"",
    });
    const navigate = useNavigate();
        const {storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        console.log(e);
        const name = e.target.name;
        const value = e.target.value;
        setUser ({
            ...user,
            [name] :value,

        })

    }

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method :"POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body :JSON.stringify(user),
        });

        if(response.ok) {
            const res_data = await response.json();
            storeTokenInLS (res_data.token);

            // 🔥 decode token to check admin
            const decoded = jwtDecode(res_data.token);

            if (decoded.isAdmin) {
                toast.success("Welcome Admin!");
                navigate("/admin");
            } else {
                toast.success("Login successful");
                navigate("/");
            }

        } else {
            toast.error("invalid credentials");
        }
    } catch (error) {
        console.log(error);
    }
};

    return <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image reg-img">
                        <img src="/images/login.png" alt="registration image" width="500" height="500" />
                    </div>
                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Login Form</h1><br />
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" value={user.email} onChange={handleInput} placeholder="enter email" />
                            </div>
  
                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password" name="password" value={user.password} onChange={handleInput} placeholder="password" />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
}