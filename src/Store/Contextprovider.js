import React,{useState} from "react"
import Context from "./context-store"
import { useNavigate } from "react-router-dom"


const ContextProvider = (props)=>{
    console.log('context is running')
    const navigate = useNavigate();
    const idfromlocalstorage = localStorage.getItem('1');
    const [idToken,setIdToken]=useState(idfromlocalstorage)

    const userIsLoggedIn = !!idToken

    const Logouthandler = ()=>{
        console.log('logouthandler')
        localStorage.removeItem('1')
        setIdToken(null)
        navigate('/auth')
    }

    const saveidToken = (id)=>{
        console.log(2)
        localStorage.setItem('1',`${id}`)
        setIdToken(id)
    }
    const store = {
        idToken : idToken,
        isLoggedin:userIsLoggedIn,
        Logouthandler:Logouthandler,
        saveidToken:saveidToken,
    }
    return(
            <Context.Provider value={store}>
                {props.children}
            </Context.Provider>
    )
}
export default ContextProvider