// src/components/NavBar.js
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png'

export default function HeaderComponent() {
    return (<header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <nav className="d-flex justify-content-end gap-2 align-items-center">
            <Link
                className="btn btn-danger"
                to="/"
            >
                AnaSayfa
            </Link>
            <Link
                className="btn btn-danger"
                to="/newOrder"
            >
                Sipariş Ver
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