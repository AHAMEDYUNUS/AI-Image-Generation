    import { createContext, useState} from "react";

    export const AppContext = createContext()

    const AppContextProvider = (props)=>{
        const [user, setUser] = useState(null);
        const [showLogin, setShowLogin] = useState(false);
        const [token, setToken] = useState(localStorage.getItem('token'));

        const [credit, setCredit] = useState(null);


        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://friendly-doodle-jvjw6q7rq7v3j65j-4000.app.github.dev/';

        const value = {
            user,setUser, showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit
        }
        return(
            <AppContext.Provider value={value}>
                {props.children}
            </AppContext.Provider>
        )

    }
    export default AppContextProvider