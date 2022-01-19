import React from 'react'
import boostBg from '../../images/bg-boost-desktop.svg';
import './style.css';

const BoostSection = () => {
    return (
        <>
            <div className='Container'>
                <div className='BgImage'>
                    <img className='BG' src={boostBg} type='image/svg'/>
                </div>
                <div className='BoostContent'>
                    <h1 className='Heading'>Boost your links today</h1>
                    <div className='BtnWrap'>
                        <a className='Btn'>Get Started</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoostSection
