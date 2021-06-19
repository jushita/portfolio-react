import React, { useState } from 'react';
import { send, init } from 'emailjs-com';
import ReactMapGL from "react-map-gl";


init("user_epyKn6pR6sJEyDRUtPZVP");

// go to https://dashboard.emailjs.com/admin
// to change template or make edits
const Contact = () => {
    const [viewport, setViewport] = useState({
        latitude: 32.7767,
        longitude: -96.7970,
        zoom: 10,
    });

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_p9t5269',
            'template_tlha6q6',
            toSend,
            'user_epyKn6pR6sJEyDRUtPZVP'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (

        <div className="contact__container">
            <div className="tokyo_tm_title">
                <div className="title_flex">
                    <div className="left">
                        <h2 className="headline">Get in Touch</h2>
                    </div>
                </div>
            </div>

            <div className="map_wrap">
                <div className="map">
                    <ReactMapGL
                        mapStyle={"mapbox://style/mapbox/dark-v9"}
                        mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
                        {...viewport}
                        onViewportChange={(nextViewport) => setViewport(nextViewport)}
                    />
                </div>
            </div>


            <div className="fields">
                <form className="contact_form" onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='Name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='reply_to'
                        placeholder='Email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <textarea
                        type='text'
                        name='message'
                        placeholder='Message'
                        value={toSend.message}
                        onChange={handleChange}
                    />
                    <button className="btn contact_btn" type='submit'>Submit</button>
                </form>
            </div>

        </div>
    );

}

export default Contact;
