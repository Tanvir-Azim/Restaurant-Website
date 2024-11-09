import React from 'react'

function HeroReducer(state,action) {
    if(action.type==="HeroToggleContact"){
        return{
            ...state,
            stateExperience:false,
            stateContact:true,
            stateAbout:false,
        }
    }

    if(action.type==="HeroToggleAbout"){
        return{
            ...state,
            stateExperience:false,
            stateContact:false,
            stateAbout:true,
        }
    }

    if(action.type==="HeroToggleExperience"){
        return{
            ...state,
            stateExperience:true,
            stateContact:false,
            stateAbout:false,
        }
    }

if(action.type==='MENU'){
    return{
        ...state,
        Menu:true
    }
}

if(action.type === 'CROSS'){
    return{
        ...state,
        Menu:false
    }
}
if(action.type === 'HOME'){
    return{
        ...state,
        home:true,
        about:false,
        contact:false,
        clients:false,
        portfolio:false,
        blog:false,
    }
}

if(action.type === 'ABOUT'){
    return{
        ...state,
        home:false,
        about:true,
        contact:false,
        clients:false,
        portfolio:false,
        blog:false,
    }
}
if(action.type === 'CONTACT'){
    return{
        ...state,
        home:false,
        about:false,
        contact:true,
        clients:false,
        portfolio:false,
        blog:false,
    }
}
if(action.type === 'CLIENTS'){
    return{
        ...state,
        home:false,
        about:false,
        contact:false,
        clients:true,
        portfolio:false,
        blog:false,
    }
}
if(action.type === 'PORTFOLIO'){
    return{
        ...state,
        home:false,
        about:false,
        contact:false,
        clients:false,
        portfolio:true,
        blog:false,
    }
}
if(action.type === 'BLOG'){
    return{
        ...state,
        home:false,
        about:false,
        contact:false,
        clients:false,
        portfolio:false,
        blog:true,
    }
}

  return state
}

export default HeroReducer