import React, { Component } from 'react';

const Resume = () => {

    return (
        <>
            <div className="resume__container">
                <div className="top-container">
                    <div className="download-container">
                        <div className="headline">
                            Resume
                        </div>
                        <a className="download-button" href='/assets/jrahman_resume.pdf' download>
                            <img className="svg" src="/assets/download.svg"></img>
                        </a>
                    </div>
                </div>
                <div>
                    <img src="/assets/resume.jpg"></img>
                </div>

            </div>
        </>
    );
}

export default Resume;
