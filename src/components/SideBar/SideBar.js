import React from 'react';
import './style.css';
import SbContainer from './SideBarElements'

export const SideBar = ({isOpen, toggle}) => {
    return (
        <>
            <SbContainer isOpen={isOpen} onClick={toggle}>
                <div className='SbWrap'>
                    <ul className='SbOptions'>
                        <a className='SbLink' href='#' onClick={toggle}>Features</a>
                        <a className='SbLink' href='#' onClick={toggle}>Pricing</a>
                        <a className='SbLink' href='#' onClick={toggle}>Resources</a>
                    </ul>
                    <ul className='SignupSbOptions'>
                        <a className='SbLink' href='#' onClick={toggle}>Login</a>
                        <div className='SbBtnWrap'>
                            <a className='SbBtn' href='#'>Sign Up</a>
                        </div>
                    </ul>
                </div>
            </SbContainer>
        </>
    )
}

export default SideBar
