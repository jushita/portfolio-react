import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const Landing = () => {
    var aText = new Array(
        "Oh, Hello World!",
        "I am Jushita Rahman",
        "A Software Developer ",
        "I am glad you're here :))"
    );
    const [typeWriterState, setTypewriterState] = useState({
        iIndex: 0,
        iArrLength: aText[0].length,
        iScrollAt: 20,
        iTextPos: 0,
        iRow: null,
        content: '',
    });
    const [buttonState, setButtonState] = useState({
        showButton: false
    });
    const history = useHistory();

    function handleClick() {
        history.push('/home')
    }


    function typewriter() {
        const copyState = { ...typeWriterState };
        const copyButtuonState = { ...buttonState };

        let sContents = ' ';
        copyState.iRow = Math.max(0, copyState.iIndex - copyState.iScrollAt);

        while (copyState.iRow < copyState.iIndex) {
            sContents += aText[copyState.iRow++] + '<br />';
        }
        copyState.content = sContents + aText[copyState.iIndex].substring(0, copyState.iTextPos) + "_";
        if (copyState.iTextPos++ === copyState.iArrLength) {
            copyState.iTextPos = 0;
            copyState.iIndex++;
            if (copyState.iIndex !== aText.length) {
                copyState.iArrLength = aText[copyState.iIndex].length;

                setTimeout(() => setTypewriterState(copyState), 300);
                if (copyState.iIndex === aText.length - 1) {
                    copyButtuonState.showButton = true;
                }
                setTimeout(() => setButtonState(copyButtuonState), 2500);
            }

        } else {
            setTimeout(() => {
                setTypewriterState(copyState)
            }, 80);
        }
    }

    useEffect(() => {
        typewriter();
        return () => {

        };
    }, [typeWriterState]);

    return (
        <>
            <div className="landing__page">

                <link href="https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise" rel="stylesheet" type="text/css" />
                <div className="landing-container">
                    <h3 className="sunrise-font" id="typedtext" dangerouslySetInnerHTML={{ __html: typeWriterState.content }}></h3>
                    {buttonState.showButton === true ? <button className="btn btn-discover" type="button" onClick={() => handleClick()}>Discover More</button> : ''}
                </div>
            </div>
        </>
    )
}

export default Landing;