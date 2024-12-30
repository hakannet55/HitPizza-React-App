// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
    return (<header className="App-header">
        <img src="../images/logo.png" className="App-logo" alt="logo"/>
        <p>
            <Link
                to="/"
            >
                AnaSayfa
            </Link>
            <Link
                to="/newOrder"
            >
                Sipariş Ver
            </Link>
            <Link
                to="/orderSummary"
            >
                Siparişlerim
            </Link>
        </p>
    </header>);
}