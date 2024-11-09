import React, {createContext, useContext, useReducer } from 'react'
import reducer from './HeroReducer';


const AppContax=createContext()
const initialState={
    names:'tanvir',
    stateExperience:false,
    stateContact:false,
    stateAbout:true,
    Menu:false,
    home:true,
    about:false,
    contact:false,
    clients:false,
    portfolio:false,
    blog:false,
}
function HeroContax({children}) {
  
    const [state, dispatch] = useReducer(reducer, initialState);
    const HeroToggleAbout=()=>{
       dispatch({
        type:"HeroToggleAbout"
       })
    }
    const HeroToggleExperience=()=>{
        dispatch({
            type:"HeroToggleExperience"
           })
    }
    const HeroToggleContact=()=>{
        dispatch({
            type:"HeroToggleContact"
           })
    }

    const MenuToggle=()=>{
        dispatch({
            type:"MENU"
        })
    }

const HandelCross=()=>{
    dispatch({
        type:"CROSS"
    })
}

const ToggoleHome=()=>{
    dispatch({
        type:'HOME'
    })
}
const ToggoleAbout=()=>{
    dispatch({
        type:'ABOUT'
    })
}
const ToggoleClients=()=>{
    dispatch({
        type:'CLIENTS'
    })
}
const ToggoleContact=()=>{
    dispatch({
        type:'CONTACT'
    })
}
const ToggolePortfolio=()=>{
    dispatch({
        type:'PORTFOLIO'
    })
}
const ToggoleBlog=()=>{
    dispatch({
        type:'BLOG'
    })
}

  return (
    <>
        <AppContax.Provider value={{...state,HeroToggleAbout,HeroToggleExperience,MenuToggle,HeroToggleContact,HandelCross,ToggoleHome,ToggoleAbout,ToggoleBlog,ToggoleClients,ToggoleContact,ToggolePortfolio}}>
            {children}
        </AppContax.Provider>
    </>
  )
}

const useHeroContax=()=>{
    return useContext(AppContax)
}

export {HeroContax,useHeroContax,AppContax}