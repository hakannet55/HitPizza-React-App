// src/components/NavBar.js
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../images/logo.png'

export default function HeaderComponent() {
    const toNavigate = useNavigate();

    const navMain = () => {
        toNavigate("/");
    }
    return (<header className="App-header w3-animate-right">
        <img onClick={navMain} src={logo} className="App-logo pointer" alt="logo"/>
        <nav className="d-flex justify-content-end gap-2 align-items-center">
            <Link
                className="btn btn-danger"
                to="/"
            >
                AnaSayfa &#9750;
            </Link>
            <Link
                className="btn btn-danger"
                to="/newOrder"
            >
                Sipariş Ver &#9745;
            </Link>
            <Link
                className="btn btn-danger"
                to="/orderSummary"
            >
                Siparişlerim
            </Link>
        </nav>
    </header>);
}