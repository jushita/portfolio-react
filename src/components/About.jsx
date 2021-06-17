import React from "react";
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
const About = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div className="about__container">
                <div className="about_image">
                    <img src="/assets/about.png" alt="about" />
                </div>
                {/* END ABOUT IMAGE */}
                <div className="description">
                    <h3 className="name">Jushita Rahman</h3>
                    <div className="description_inner">
                        <div className="left">
                            <p>
                                As a Senior Software Engineer my goal is to contribute to creating impactful software products that changes people's lives for the better
                                With my previous experience in the media industry and extensive community service I have learned to incorporate versatility and diversity
                                in my work. I love challenges and learning new things.
                                I enjoy smart conversations over a cup of coffee and reading about scientific discoveries.
                            </p>
                            <div className="abt_tm_button">
                                <button className="btn readmore-btn" onClick={openModal}>Read More</button>
                            </div>
                            {/* END TOKYO BUTTON */}
                        </div>
                    </div>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="abt_tm_modalbox_about">
                        <button className="close-modal" onClick={closeModal}>X
                    </button>
                        {/* END POPUP CLOSE BUTTON */}
                        <div className="box-inner">
                            <div className="description_wrap scrollable">
                                <div className="my_box">


                                    <div className="left">
                                        <div className="about_title">
                                            <h3>Photography Skills</h3>
                                        </div>
                                        {/* END ABOUT TITLE */}

                                        <div className="abt_progress">
                                            <div className="progress_inner" data-value="95">
                                                <span>
                                                    <span className="label">Wedding</span>
                                                    <span className="number">95%</span>
                                                </span>
                                                <div className="background">
                                                    <div className="bar">
                                                        <div className="bar_in" style={{ width: 95 + '%' }}></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="progress_inner" data-value="80">
                                                <span>
                                                    <span className="label">Lifestyle</span>
                                                    <span className="number">80%</span>
                                                </span>
                                                <div className="background">
                                                    <div className="bar">
                                                        <div className="bar_in" style={{ width: 80 + '%' }}></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="progress_inner" data-value="90">
                                                <span>
                                                    <span className="label">Family</span>
                                                    <span className="number">90%</span>
                                                </span>
                                                <div className="background">
                                                    <div className="bar">
                                                        <div className="bar_in" style={{ width: 90 + '%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* END PROGRESS */}
                                    </div>
                                    {/* END LEFT */}

                                    <div className="right">
                                        <div className="about_title">
                                            <h3>Photography Skills</h3>
                                        </div>
                                        {/* END ABOUT TITLE */}

                                        <div className="abt_progress">
                                            <div className="progress_inner" data-value="95">
                                                <span>
                                                    <span className="label">Wedding</span>
                                                    <span className="number">95%</span>
                                                </span>
                                                <div className="background">
                                                    <div className="bar">
                                                        <div className="bar_in" style={{ width: 95 + '%' }}></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="progress_inner" data-value="80">
                                                <span>
                                                    <span className="label">Lifestyle</span>
                                                    <span className="number">80%</span>
                                                </span>
                                                <div className="background">
                                                    <div className="bar">
                                                        <div className="bar_in" style={{ width: 80 + '%' }}></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="progress_inner" data-value="90">
                                                <span>
                                                    <span className="label">Family</span>
                                                    <span className="number">90%</span>
                                                </span>
                                                <div className="background">
                                                    <div className="bar">
                                                        <div className="bar_in" style={{ width: 90 + '%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* EDN TOKYO PROGRESS */}
                                    </div>
                                    {/* END RIGHT */}
                                </div>
                                {/* END MYBOX */}

                                <div className="counter">
                                    <div className="about_title">
                                        <h3>Fun Facts</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="list_inner">
                                                <h3>777+</h3>
                                                <span>Projects Completed</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <h3>3K</h3>
                                                <span>Happy Clients</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <h3>9K+</h3>
                                                <span>Lines of Code</span>
                                            </div>
                                        </li>
                                    </ul>
                                    {/* END COUNTER CONTENT */}
                                </div>
                                {/* END COUNTER */}
                            </div>
                        </div>
                    </div>
                </Modal>

            </div>
        </>
    );
}

export default About;
