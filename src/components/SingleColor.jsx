import React, { useState, useEffect } from 'react';

const SingleColor = ({rgb, weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false);

    const color = rgb.join(',');

    const hexValue = `#${hexColor}`;

    const copyToClipboard = () => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 2000)
        return () => clearTimeout(timeout)
    }, [alert])

    return (
        <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${color})`, height: "200px", width: "200px"}} 
        onClick={copyToClipboard}
        >
            <p>{weight}%</p>
            <p>{hexValue}</p>
            {
                alert && <p>copied to clipboard</p>
            }
        </article>
    )
}

export default SingleColor
