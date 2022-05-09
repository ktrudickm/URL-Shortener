import React, { useState } from 'react';
import Navbar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/SideBar'
import MainPage from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import BoostSection from '../components/BoostSection/Boost'
import Stats from '../components/StatsSection/Stats'
import Form from '../components/FormField/Form'

const Main = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <MainPage />
            <Form />
            <Stats />
            <BoostSection />
        </>
    )
}

export default Main