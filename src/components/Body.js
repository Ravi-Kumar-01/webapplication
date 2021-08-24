import React from 'react';
import './Body.css';
import generator from '../images/icons/generator.png';
import tele from '../images/icons/telecommunications.png';
import cctv from '../images/icons/cctv.png';
import house from '../images/icons/house.png';
import extinguisher from '../images/extinguisher.jpg';
import electrical from '../images/electricalLw.jpg';
import lift from '../images/lifting.jpg';
import sail from '../images/icons/sail.png';
import ntpc from '../images/icons/ntpc logo.jpg';

export default function Request() {
    return ( <
        >
        <
        div className = "service-container" >
        <
        h1 > Our Services < /h1> <
        div className = "service-items" >
        <
        div className = "s-items" > < img src = { generator }
        alt = "Gene" / > GeneratorInstallation < /div > <
        div className = "s-items" > < img src = { tele }
        alt = "Tele" / > Telecommunication Installation < /div> <
        div className = "s-items" > < img src = { cctv }
        alt = "Tele" / > CCTVInstallation < /div> <
        div className = "s-items" > < img src = { generator }
        alt = "Gene" / > GeneratorInstallation < /div> <
        div className = "s-items" > < img src = { house }
        alt = "House" / > New Construction Wiring < /div> < /
        div > <
        /div> <
        div className = "img2" >
        <
        div className = "whyUs" >
        <
        h1 > Why to Choose Us ? < /h1> <
        ul className = "why-points" >
        <
        li > Experienced, Motivated Staff < /li> <
        li > Honest and cordial Relationship with Client < /li> <
        li > Meticulously Selected, Rigorously Trained and Thoroughly Vetted Workforce < /li> <
        li > QRT, Control Room / Customer Care, Checking Squad < /li> <
        li > Wide Range of Tools available < /li> < /
        ul > <
        /div> < /
        div > <
        div className = "portfolio-container" >
        <
        h1 > Our Portfolios < /h1> <
        div className = "ps-items" >
        <
        div className = "ps-item" > < img src = { extinguisher }
        alt = "Fire img" / > Fire Detection and Protection System at NTPCs < /div> <
        div className = "ps-item" > < img src = { electrical }
        alt = "electric" / > Electricals Equipment of LT HT, SWGR Cabling & Tray etc.at AMRPL Site Hyderabad < /div> <
        div className = "ps-item" > < img src = { lift }
        alt = "lifting" /
        >
        Installation, Alignment, Testing & Commissioning
        for CW pump house at NTPC Barh < /div> < /
        div > <
        /div> <
        div className = "client-container" >
        <
        h1 > Our Clients < /h1> <
        div className = "client-items" >
        <
        div className = "client"
        id = "circle" >
        <
        img src = { sail }
        alt = "sail" / >
        <
        /div> <
        div className = "client"
        id = "circle" >
        <
        img src = { ntpc }
        alt = "ntpc" / >
        <
        /div> < /
        div > <
        /div> < / >
    )

}