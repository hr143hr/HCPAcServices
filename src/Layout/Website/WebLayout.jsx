import React from 'react'
import Header from '../../Components/Website/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../Components/Website/Footer/Footer'
import './../../Css/Website/Website.css'
const WebLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default WebLayout