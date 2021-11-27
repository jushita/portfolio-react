import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import About from './About';
import Blog from './Blog';
import Resume from './Resume'
import Navbar from "./Navbar";
import Skills from "./Skills"
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Home = () => {

    const size = useWindowSize();
    const [pathname] = useState(window.location.pathname); 


    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });
      
        useEffect(() => {
          // Handler to call on window resize
          function handleResize() {
            // Set window width/height to state
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
      
          // Add event listener
          window.addEventListener("resize", handleResize);
      
          // Call handler right away so state gets updated with initial window size
          handleResize();
      
          // Remove event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
      
        return windowSize;
      }
      

    if(size.width > 768) {
        return (
            <>
                <Tabs>
                    <TabList>
                        <div className="leftpart">
                            <div className="leftpart__inner">
    
                                <div className="menu">
                                    <ul>
                                        <Tab>
                                            <span className="menu__content" >About</span>
                                        </Tab>
                                        <Tab>
                                            <span className="menu__content">Resume</span>
                                        </Tab>
                                        <Tab>
                                            <span className="menu__content">Photo Blog</span>
                                        </Tab>
                                        <Tab>
                                            <span className="menu__content">Skills</span>
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
                                        <Skills />
                                    </TabPanel>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </Tabs>
            </>
        );
    } else if(size.width <= 768) {
        
        return(
            <>
                <Router>
                <Navbar />

                <Switch>
                    <Route path='/home/about' component={About} />
                    <Route path='/home/resume' component={Resume} />
                    <Route path='/home/photo-blog' component={Blog} />
                    <Route path='/home/illustrations' component={Skills} />
                    <Route path='/home' component={About} />

                </Switch>
                </Router>
            </>
        );
    } else {
        return null;
    }

    
}
export default Home;
