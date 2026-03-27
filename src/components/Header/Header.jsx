import React from "react";
import "./Header.css";

const Header = ({title}) => {

return(
    <header className="header">
        <h1>{title ? title : "TO-DO LIST"}</h1>
    </header>
);

}
export default Header;