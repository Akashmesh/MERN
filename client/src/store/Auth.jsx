import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
const [token, setToken] = useState(localStorage.getItem("token"));
const [user,setUser] = useState("");
const[services, setServices] = useState("");

        const storeTokenInLS = (serverToken) => {
            return localStorage.setItem("token", serverToken);  
        };
        let isLoggedIn = !!token;
        console.log("isLoggedIn", isLoggedIn);
        //logout functionality
        const LogoutUser = () => { 
            setToken ("");
            return localStorage.removeItem("token");
        }
        //function to check user authorized or not
const userAuthentication =async () => {
    try {
        const response = await fetch("http://localhost:5000/api/auth/user",
        {
            method : "GET",
            headers : {
                Authorization : `Bearer ${token}`,
            },
        });
        if(response.ok) {
            const data = await response.json();
            setUser(data.userData);
        }else {
            console.error(`Error fetchin user data`);
        }
    } catch (error) {
        console.log(error);
    }
};
//to fetch service data from db 
const getServices = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/data/service",
            {
                method : "GET",
            });
        if (response.ok) {
            const data = await response.json();
            console.log(data.data);
            setServices(data.data);
        }
    } catch (error) {
        console.log(`Servies frontend error ${error}`);
    }
}
useEffect (() => {
    getServices();
    userAuthentication();
}, []);
        return (
            <AuthContext.Provider value={{isLoggedIn, storeTokenInLS, LogoutUser, user, services}}>{children}</AuthContext.Provider>
        );
};
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue) {
        throw new Error("useAuth used outsided of provider");
        
    } 
    return authContextValue;
};