import React,{useState} from "react"
import Context from "./context-store"
import { useNavigate } from "react-router-dom"


const ContextProvider = (props)=>{
    const navigate = useNavigate();
    const [idToken,setIdToken]=useState(null)

    const Logouthandler = ()=>{
        console.log('logouthandler')
        setIdToken(null)
        navigate('/auth')
    }

    const saveidToken = (id)=>{
        console.log(2)
        setIdToken(id)
    }
    const store = {
        idToken : idToken,
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