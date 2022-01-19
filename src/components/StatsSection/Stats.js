import React from 'react'
import img1 from '../../images/icon-brand-recognition.svg'
import img2 from '../../images/icon-detailed-records.svg'
import img3 from '../../images/icon-fully-customizable.svg'
import './style.css'


const StatsSection = () => {
    return (
        <>
            <div className='StatsContainer'>
                <div className='HeadingContainer'>
                    <h1 className='MainHeader'>Advanced Statistics</h1>
                    <p className='StatsSubtitle'>Track how your links are performing accross the web with our advanced statistics dashboard.</p>
                </div>
                <hr></hr>
                <div className='centerLine'>
                <div className='cardWrapper'>
                    <div className='Card1 Card'>
                        <div className='ImgContainer'>
                            <img className='CardImg' src={img1}/>
                        </div>
                        
                        <div className='CardContainer'>
                            <h2 className='CardHeading'>Brand Recognition</h2>
                            <p className='CardContent'>Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instill confidence in your content.</p>
                        </div>
                    </div>
                    <div className='Card2 Card'>
                        <div className='ImgContainer'>
                            <img className='CardImg' src={img2}/>
                        </div>
                        <div className='CardContainer'>
                            <h2 className='CardHeading'>Detailed Records</h2>
                            <p className='CardContent'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                        </div>
                    </div>
                    
                    <div className='Card3 Card'>
                        <div className='ImgContainer'>
                            <img className='CardImg' src={img3}/>
                        </div>
                        <div className='CardContainer'>
                            <h2 className='CardHeading'>Fully Customizable</h2>
                            <p className='CardContent'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </>
    )
}

export default StatsSection
