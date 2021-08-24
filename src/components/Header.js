import React from 'react';
import mainlogo from '../images/logo.png'
import './Header.css'

export default function Header() {
    return ( <
        >
        <
        div className = "img-div" >
        <
        nav className = "navbar" > < img src = { mainlogo }
        alt = "Logo" / >
        <
        ul className = "navbar-ul" >
        <
        li > < a href = "/index.html" > Home < /a></li >
        <
        li > < a href = "#" > About Us < /a></li >
        <
        li > < a href = "/services.html" > Services < /a></li >
        <
        li > < a href = "#" > Projects < /a></li >
        <
        li > < a href = "#" > Contact Us < /a></li >
        <
        /ul> < /
        nav > < /
        div >

        <
        />
    )
}