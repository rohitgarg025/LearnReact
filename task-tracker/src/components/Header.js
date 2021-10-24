import Button from "./Button"
import React from "react"
const Header = ({title, onAdd, onShowAdd}) => {

    const onClick = () => {
        console.log("Click")
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={onShowAdd?"green":"red"} btntext= {onShowAdd?"Add":"Close"} onClick = {onAdd}/>
        </header>
    )
}

export default Header
