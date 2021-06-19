import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Contact from './Contact';
import About from './About';
import Blog from './Blog';
import Resume from './Resume'



const Home = () => {

    return (
        <>
            <Tabs>
                <TabList>
                    <div className="leftpart">
                        <div className="leftpart__inner">

                            <div className="menu">
                                <ul>
                                    <Tab>
                                        <span className="menu__content">About</span>
                                    </Tab>
                                    <Tab>
                                        <span className="menu__content">Resume</span>
                                    </Tab>
                                    <Tab>
                                        <span className="menu__content">Photo Blog</span>
                                    </Tab>
                                    <Tab>
                                        <span className="menu__content">Contact</span>
                                    </Tab>

                                </ul>
                            </div>
                            <div className="copyright">
                                <p>
                                    &copy; {new Date().getFullYear()} my Portfolio <br /> Created by JRahman
                                </p>
                            </div>
                        </div>

                    </div>
                </TabList>
                <div className="rightpart">
                    <div className="rightpart_in">
                        <div className="main__section">
                            <div className="container">
                                <TabPanel>
                                    <About />
                                </TabPanel>
                                <TabPanel>
                                    <Resume />
                                </TabPanel>
                                <TabPanel>
                                    <Blog />
                                </TabPanel>
                                <TabPanel>
                                    <Contact />
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </div>

            </Tabs>
        </>
    );
}
export default Home;
