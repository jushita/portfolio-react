import React, { Component } from 'react';
import Modal from "react-modal";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-25%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const Illustrations = () => {
    // 1st Modal
    const [modalIsOpen1, setIsOpen1] = React.useState(false);
    function openModal1() {
        setIsOpen1(true);
    }
    function afterOpenModal1() {
    }
    function closeModal1() {
        setIsOpen1(false);
    }

    // 2nd Modal
    const [modalIsOpen2, setIsOpen2] = React.useState(false);
    function openModal2() {
        setIsOpen2(true);
    }
    function afterOpenModal2() {
    }
    function closeModal2() {
        setIsOpen2(false);
    }

    // 3rd Modal
    const [modalIsOpen3, setIsOpen3] = React.useState(false);
    function openModal3() {
        setIsOpen3(true);
    }
    function afterOpenModal3() {
    }
    function closeModal3() {
        setIsOpen3(false);
    }

    // 4th Modal
    const [modalIsOpen4, setIsOpen4] = React.useState(false);
    function openModal4() {
        setIsOpen4(true);
    }
    function afterOpenModal4() {
    }
    function closeModal4() {
        setIsOpen4(false);
    }

    // 5th Modal
    const [modalIsOpen5, setIsOpen5] = React.useState(false);
    function openModal5() {
        setIsOpen5(true);
    }
    function afterOpenModal5() {
    }
    function closeModal5() {
        setIsOpen5(false);
    }

    // 6th Modal
    const [modalIsOpen6, setIsOpen6] = React.useState(false);
    function openModal6() {
        setIsOpen6(true);
    }
    function afterOpenModal6() {
    }
    function closeModal6() {
        setIsOpen6(false);
    }

    return (
        <>
        <div className="blog__container">

            <div className="headline headline__container">
                Illustrations
            </div>
            <p className="desc description">
                My recent musing has been creating art work. I am using both watercolor in physical paper
                as well as digital painting.
            </p>
            <div className="desc description">
                Coming Soon
            </div>
        </div>
        
        
            {/* <div className="blog__container">
                <div className="headline headline__container">
                    Photo Blog
                </div>
                <p className="desc description">
                    I love nature and art. I enjoy travelling, hiking and exploring unique places. Here are some
                    pictures from my recent travels.
                    </p>
                <div>
                    <section className="cards">
                        <article className="card">
                            <img className="article-img" src="/assets/1.png" alt=" " onClick={openModal1} />
                        </article>
                        <article className="card">
                            <img className="article-img" src="/assets/2.png" alt=" " onClick={openModal2} />

                        </article>
                        <article className="card">
                            <img className="article-img" src="/assets/3.png" alt=" " onClick={openModal3} />

                        </article>
                        <article className="card">
                            <img className="article-img" src="/assets/4.png" alt=" " onClick={openModal4} />

                        </article>
                        <article className="card">
                            <img className="article-img" src="/assets/5.png" alt=" " onClick={openModal5} />

                        </article>
                        <article className="card">
                            <img className="article-img" src="/assets/6.png" alt=" " onClick={openModal6} />

                        </article>
                    </section>
                </div>

                <Modal
                    isOpen={modalIsOpen1}
                    onAfterOpen={afterOpenModal1}
                    onRequestClose={closeModal1}
                    style={customStyles}
                    contentLabel="Modal"
                    className="">
                    <div className="abt_tm_modalbox_about fade-in-image">
                        <button className="close-modal" onClick={closeModal1}>X</button>
                        <img className="article-img" src="/assets/1.png" alt=" " />
                    </div>
                </Modal>

                <Modal
                    isOpen={modalIsOpen2}
                    onAfterOpen={afterOpenModal2}
                    onRequestClose={closeModal2}
                    style={customStyles}
                    contentLabel="Modal"
                    className="">
                    <div className="abt_tm_modalbox_about fade-in-image">
                        <button className="close-modal" onClick={closeModal2}>X</button>
                        <img className="article-img" src="/assets/2.png" alt=" " />
                    </div>
                </Modal>

                <Modal
                    isOpen={modalIsOpen3}
                    onAfterOpen={afterOpenModal3}
                    onRequestClose={closeModal3}
                    style={customStyles}
                    contentLabel="Modal"
                    className="">
                    <div className="abt_tm_modalbox_about fade-in-image">
                        <button className="close-modal" onClick={closeModal3}>X</button>
                        <img className="article-img" src="/assets/3.png" alt=" " />
                    </div>
                </Modal>

                <Modal
                    isOpen={modalIsOpen4}
                    onAfterOpen={afterOpenModal4}
                    onRequestClose={closeModal4}
                    style={customStyles}
                    contentLabel="Modal"
                    className="">
                    <div className="abt_tm_modalbox_about fade-in-image">
                        <button className="close-modal" onClick={closeModal4}>X</button>
                        <img className="article-img" src="/assets/4.png" alt=" " />
                    </div>
                </Modal>

                <Modal
                    isOpen={modalIsOpen5}
                    onAfterOpen={afterOpenModal5}
                    onRequestClose={closeModal5}
                    style={customStyles}
                    contentLabel="Modal"
                    className="">
                    <div className="abt_tm_modalbox_about fade-in-image">
                        <button className="close-modal" onClick={closeModal5}>X</button>
                        <img className="article-img" src="/assets/5.png" alt=" " />
                    </div>
                </Modal>

                <Modal
                    isOpen={modalIsOpen6}
                    onAfterOpen={afterOpenModal6}
                    onRequestClose={closeModal6}
                    style={customStyles}
                    contentLabel="Modal"
                    className="">
                    <div className="abt_tm_modalbox_about fade-in-image">
                        <button className="close-modal" onClick={closeModal6}>X</button>
                        <img className="article-img" src="/assets/6.png" alt=" " />
                    </div>
                </Modal>
            </div> */}

        </>
    );
};


export default Illustrations;