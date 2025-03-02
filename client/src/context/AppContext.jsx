    import axios from "axios";
import { createContext, useEffect, useState} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

    export const AppContext = createContext(null)

    const AppContextProvider = (props)=>{
        const [user, setUser] = useState(null);
        const [showLogin, setShowLogin] = useState(false);
        const [token, setToken] = useState(localStorage.getItem('token'));
        const navigate = useNavigate();

        const [credit, setCredit] = useState();
        const backendUrl = import.meta.env.VITE_BACKEND_URL;

        const loadCreditsData = async ()=>{
            try {
                const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/credits`, {headers: {token}})

                if(data.success){                   
                    setCredit(data.credits)
                    setUser(data.user)
                } else{
                    toast.error(data.message);
                }

            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }

        useEffect(()=>{
            if(token){
                loadCreditsData();
            }
        }, [token])


        const logout = ()=>{
            localStorage.removeItem('token');
            setToken(null);
            setUser(null);
            navigate("/");
        }


        const value = {
            user,setUser, showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit ,loadCreditsData, logout
        }
        return(
            <AppContext.Provider value={value}>
                {props.children}
            </AppContext.Provider>
        )

    }
    export default AppContextProvider