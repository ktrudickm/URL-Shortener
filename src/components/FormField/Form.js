import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Form = () => {
    const api = 'https://api.shrtco.de/v2/shorten?url=';
    const storedUrlData = JSON.parse(localStorage.getItem('urlData')) || [];
    const storedCopyData = JSON.parse(localStorage.getItem('isCopied')) || [];


// ------------------------> State Declarations <----------------------------


    // Stores/handles the entered URL form user
    const [inputUrl, setInputUrl] = useState('');
    // Stores/handles the fetched URL data
    const [urlData, setUrlData] = useState(storedUrlData);
    // Error message for if the user did not input any URL
    const [errMsg, setErrMsg] = useState(null);
    // Success message for valid URL
    const [successMsg, setSuccessMsg] = useState(null);
    // For updating whether or not the user has clicked the copy button
    const [isCopied, setCopied] = useState(storedCopyData);



// ------------------------> Copy Button Handling <----------------------------

    

    useEffect(() => {
        const copyJson = JSON.stringify(isCopied);
        localStorage.setItem('isCopied', copyJson);
    }, [isCopied]);

    // Setting the initial button text to 'Copy' after page refresh
    useEffect(() => {
        const initialButtonsClickedText = isCopied.map(() => 'Copy');
        setCopied(initialButtonsClickedText);
    }, []);

    // handles the click event of the Copy button. Changes the text value of that specific item to 'Copied'
    const handleClick = index => {

        const newArr=isCopied.map((item, buttonIndex) => (buttonIndex === index ? 'Copied!' : item))
        setCopied(newArr);
        console.log(isCopied);

    }



    // ------------------------> Form Field Handling <----------------------------



    // Handles capturing the url entered by the user in the input field and assiging it to inputURL
    function handleChange(e) {
        e.preventDefault();
        setInputUrl(e.target.value);
    }

    // Saving data to local storage so data persists after browser refresh
    useEffect(() => {
        const json = JSON.stringify(urlData);
        localStorage.setItem('urlData', json);
    }, [urlData]);


    // Fetches the API data using the inputted URL
    const handleURL = () => {
        return axios.get(api+`${inputUrl}`)
              .then(res => {
                setUrlData([...urlData, res.data])
                setInputUrl('')
                console.log(isCopied);
                setCopied([...isCopied, 'Copy']);
            }) .catch (err => {
                console.error("Error fetching data")
                console.log(err)
            })
        }

    // Handles the submition of the url and checks if it is valid, empty, or valid.
    function handleSubmit(e) {
        e.preventDefault();

        if (inputUrl === '') {
            setSuccessMsg(false);
            setErrMsg(true);
            setInputUrl('');
        } else {
            setInputUrl('');
            setErrMsg(false);
            setSuccessMsg(true);
            handleURL();
        }
    }


    // ------------------------> Return Page Content <----------------------------


    return (
        <>
            <div className="sectionContainer">
                <div className='formContainer'>
                    <div className='formWrap'>
                        <form className="Form" onSubmit={handleSubmit}>
                            <div className="FormGroup form-group">
                                <input 
                                    type="text" 
                                    onChange={handleChange} 
                                    value={inputUrl} 
                                    className="Input" 
                                    size='80' 
                                    placeholder="Shorten a link here..."
                                    style={errMsg ? {border:'1.5px solid hsl(0, 87%, 67%)'} : {}}
                                />
                                {errMsg && (
                                <span><p className='ErrorMsg'><i>Please add a link</i></p></span>
                                )}
                                {successMsg && (
                                <span><p className='SuccessMsg'><i>Success!</i></p></span>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="btn"
                            >
                                Shorten It!
                            </button>
                        </form>
                    </div> 
                    <div className='DisplayList'>
                    <div className='resultContainer'>
                        {urlData.map((url, index) =>
                        <div className="resultRow">
                            <div className="origUrlCol">
                                <p key={index} className='origUrl'>{ url.result.original_link }</p>
                            </div>
                            <div className='newUrlCol'>
                                <p key={index} className='newUrl'>{ url.result.full_short_link }</p>
                                <CopyToClipboard text={url.result.full_short_link}>
                                    <button
                                        key={index}
                                        type="button"
                                        className='copyBtn'
                                        className={isCopied[index] === 'Copy' ? 'copyBtn' : 'copiedBtn'}
                                        onClick={() => handleClick(index)}
                                    ><span>
                                        {isCopied[index]}
                                    </span>
                                    </button>
                                </CopyToClipboard>
                            </div>
                        </div>
                        )}
                    </div>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
