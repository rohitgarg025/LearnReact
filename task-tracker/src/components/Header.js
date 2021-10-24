import Button from "./Button"
import React from "react"
import { useLocation } from "react-router-dom"
const Header = ({title, onAdd, onShowAdd}) => {

    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button color={onShowAdd?"red":"green"} btntext= {onShowAdd?"Close":"Add Task"} onClick = {onAdd}/>)}
        </header> 
    )
}

export default Header
