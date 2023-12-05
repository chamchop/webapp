import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/Data">data</Link></li>
                <li><Link to="/News">news</Link></li>
                <li><Link to="/Opinion">opinion</Link></li>
            </ul>
        </nav>
    ); 
}
export default Navbar;