import React from 'react'
import './style.css'
import img1 from '../../images/illustration-working.svg'

export const MainSection = () => {
    return (
        <>
            <div className='MainContainer'>
                <div className='MainWrap'>
                    <div className='MainRow'>
                        <div className='TextContent item'>
                            <div className='TextWrap'>
                                <h1 className='header'>More than just shorter links</h1>
                                <p className='MainSubtitle'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                                <div className='BtnWrapper'>
                                    <a href='/' className='Btn'>Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className='ImageSection item'>
                            <div className='ImageWrap'>
                                <img className='Image' src={img1} alt='illustration-working'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default MainSection

