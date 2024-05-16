import NavBar from "../../components/Nav/NavBar.jsx";
import Img1 from "../../assets/khushi.jpg";
import Img2 from "../../assets/tanisha.jpg";
import Img3 from "../../assets/harshita.jpg";
import Img4 from "../../assets/susu.jpg";
import Img5 from "../../assets/shreya.jpg";

import collage1 from "../../assets/collage1.jpg";
import collage2 from "../../assets/collage2.jpeg";
import collage3 from "../../assets/collage3.jpg";
import collage9 from "../../assets/collage9.jpg";
import collage5 from "../../assets/collage5.jpg";
import collage6 from "../../assets/collage6.jpg";

import { Link } from "react-router-dom";

import "./Home.css";

function Home() {

    /*
        


    */

    return (
        <div className="Home">
            <NavBar />
            <div className="home-start">
                <div>
                    <p>Welcome To My Blog Site :) </p>
                    <img src={collage9} alt="demo-pic2" />

                </div>
                <img src={Img5} alt="demo-pic" />
            </div>


            <div className="home-post">
                <div className="home-post-title">Life of Fashion Student</div>
                <div>
                    <img src={Img1} alt="demo-pic3" />
                    <div>
                        <div><Link to="./1">MFM STUDENT</Link></div>
                        <div><Link to="./1">Slice of Khushi Kholi</Link></div>
                        <div><Link to="./1">I'm an MFM, meaning my degree could lead me into almost any career in fashion.
                            Between lectures and lining up my sunglasses on top of my dresser, I study. This involves making
                            what seems like million mind maps and referencing every book and article I read ....
                        </Link></div>

                    </div>
                </div>
                <div>
                    <img src={Img2} alt="demo-pic3" />
                    <div>
                        <div><Link to="./2">Fc Student</Link></div>
                        <div><Link to="./2">Slice of Tanisha Ratod</Link></div>
                        <div><Link to="./2">
                            My schedule is never the same; each week and day vary, but I do try to maintain a semi-routined schedule to stay
                            on track and have a productive week. It's been really exciting being a part of this journey where I get to explore
                            fashion and experiment with styling and designing ....</Link></div>
                    </div>
                </div>
                <div>
                    <img src={Img3} alt="demo-pic3" />
                    <div>
                        <div><Link to="./3">AD STUDENT</Link></div>
                        <div><Link to="./3">Slice of Harshita Dagar</Link></div>
                        <div>
                            <Link to="./3">
                                A day in the life of a fashion student; well… where do I start? Being a design student can be hectic and stressful sometimes,
                                but knowing ways to balance it can help a lot. Personally, I work in the 10 to 15-minute gaps throughout the day, finding these
                                moments valuable for productivity. Additionally, I'm doing a graphic design internship with MyEquation .....
                            </Link></div>

                    </div>
                </div>
            </div>

            <div className="home-intro2">
                <div><p>"Whenever someone creates something with all of their heart, then that creation is given a soul "</p><p>By Aoi Hiiragi</p></div>
                <div>
                    <img src={collage2} alt="Img1" />
                </div>
            </div>


            <div className="home-intro3">
                <div>
                    <img src={Img4} alt="Img1" />
                </div>
                <div><p>About Me</p><p>"Hey there! I'm Shreya Thapa, a fashion communication student at NIFT Shillong.I like watching anime
                    and hopping into bakeries. When people discover I'm into fashion, their first question is, "Do you make your clothes?" Well,
                    not yet, but it's a dream. Through this blog, I aim to share how my mates and I navigate the exciting world of fashion,
                    juggling studies and our vibrant fashion lifestyles. Join us on this journey as we strive to live our lives to the fullest,
                    finding motivation to keep pushing forward.
                    "</p></div>
            </div>

            <div className="home-collage">
                <div>More Of Us</div>
                <div>
                    <img src={collage1} alt="demo-pic" />
                    <img src={collage5} alt="demo-pic" />
                    <img src={collage3} alt="demo-pic" />
                    <img src={collage6} alt="demo-pic" />

                </div>

            </div>


        </div>
    )
}

export default Home;