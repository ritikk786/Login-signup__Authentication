import React from "react";

const Context =React.createContext({
 idToken:null,
})
 

const ContextStore = (props)=>{
    const contextitem = {
        idToken:null,
    }
    return(
        <Context.Provider value={contextitem}>
            {props.children}
        </Context.Provider>
    )
}
export default Context;