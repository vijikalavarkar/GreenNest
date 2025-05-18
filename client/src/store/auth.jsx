import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {

    const [ token, setToken ] = useState(localStorage.getItem('token'));
    const [ user, setUser ] = useState("");
    const [ service, setService ] = useState("");
    

    
    
    const storeTokeninLocalStorage = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem('token', serverToken);
    }

    const userLogout = () => {
        setToken("");
        localStorage.removeItem('token');
    }

    let isLoggedIn = !!token;

    // auth

    const getAuthState = async () => {
        
        const response = await fetch('http://localhost:4000/api/v1/auth/getauth', {
            method: 'GET',
        })  
        
        if(response.ok){
            isLoggedIn = true;
        }

    }

    useEffect(()=>{
        getAuthState();
    }, [])

    // User Authentication

    const userAuthentication = async () => {

        const response = await fetch('http://localhost:4000/api/v1/auth/user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        if(response.ok){
            const data = await response.json();
            setUser(data.userData);
        }

    }

    useEffect(()=>{
        userAuthentication();
    }, []);



    // User Services

    const userServices = async () => {

        const response = await fetch('http://localhost:4000/api/v1/auth/service', {
            method: 'GET',
        });

        if(response.ok){
            const data = await response.json();
            setService(data.serviceData);
        }

    }

    useEffect(()=>{
        userServices();
    }, [])




    const values = { 
        storeTokeninLocalStorage, 
        userLogout, 
        isLoggedIn, 
        user, 
        service 
    }


    return (
        <AuthContext.Provider value={ values }>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    
    const authContextValue = useContext(AuthContext);

    if(!authContextValue) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return authContextValue;

}


