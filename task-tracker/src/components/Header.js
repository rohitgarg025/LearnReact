import Button from "./Button"
import React from "react"
const Header = ({title, onAdd, onShowAdd}) => {

    const onClick = () => {
        console.log("Click")
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={onShowAdd?"red":"green"} btntext= {onShowAdd?"Close":"Add Task"} onClick = {onAdd}/>
        </header> 
    )
}

export default Header
