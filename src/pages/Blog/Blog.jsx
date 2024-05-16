import React from "react";
import NavBar from "../../components/Nav/NavBar";
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";
import "./Blog.css";

import { useParams } from "react-router-dom";

function Blog() {

    let { id } = useParams();
    console.log(id)

    let user = ["Khushi Kholi", "Tanisha Ratod", "Harshita Dagar"];
    let story = ["I am an MFM, meaning my degree could lead me into almost any career in fashion. Between lectures and lining up my sunglasses on top of my dresser, I study. This involves making what seems like a million mind maps and referencing every book and article I read.The most rewarding aspect as a fashion student is that I get to try out new and trendy stuff and gain knowledge about upcoming trends. The specific areas I want to practice my skills in are recycling or upcycling clothes and also knitting and crocheting.  The challenges we faced during our time at my fashion college were how much we had to spend on materials for projects and assignments. So, we used to save up money specifically for it, and that's how we went about it.  My signature style element is a white shirt, which I style a lot and often in different ways, also adding accessories. During my degree, my go-to lunch spot was a cafe just next to my college, which used to have cute little muffins. Whenever we got bored, we used to hang out there. Other activities that take up my day include getting rid of spiders. I hope this gave a helpful insight into a day in the life of a fashion student, and if you’re thinking it, I promise I’m not shallow and looks-obsessed!",
        "My schedule is never the same; each week and day vary, but I do try to maintain a semi-routined schedule to stay on track and have a productive week. It's been really exciting being a part of this journey where I get to explore fashion and experiment with styling and designing. I often divide my day into parts where I have focused sessions for my work, and at other times, I like going out and exploring the city. During the lunch break at college, My favourite spot for having lunch is Dorema. The place is very soothing and serves delicious food. I don't like eating in the college mess. after having some good meal and attending all the lecture i run to catch the bus because it is very hectic to reach early.after reaching to the hostel i take a small 1 hour nap and gthen start doing my assingment while having dinner in my room.finishing all my chorses now i do my skin care and scroll through my social meadia and sleep. The most rewarding aspect would definitely be that every day I have something new to learn, and it never gets boring. The overall community is very supportive and positive, embracing their culture and uniqueness. I would like to pursue styling and direction. The biggest influence on my personal style has to be the 2000s era and retro styles. ",
        " A day in the life of a fashion student; well… where do I start? Being a design student can be hectic and stressful sometimes, but knowing ways to balance it can help a lot. Personally, I work in the 10 to 15-minute gaps throughout the day, finding these moments valuable for productivity. Additionally, I'm doing a graphic design internship with MyEquation.  The freedom to experiment with different styles and materials allows for a deep exploration of personal artistic expression, working on a variety of projects contributing to the development of a strong portfolio. The problem I face is budget constraints. Working within limited budgets for materials and projects is tough, but exploring cost-effective alternatives, repurposing materials, and learning to manage resources efficiently can be solutions. Consider collaborations with other students to share expenses. After having a break for lunch, mostly, we go to the mess. But other than that, we love to go to the Kong Shop right in front of our campus. As a Design student at the National Institute of Fashion Technology, my experience has been very happening, to be honest. I've overcome many new things, both good and bad, and learned to adjust to new people. Additionally, realizing that sometimes the simplest solutions can be the best is at the top of my list."];

    let img = [Img2, Img1, Img3];

    return (<div>
        <NavBar />
        <div className="blog">
            <div className="blog-title">Slice of {user[id - 1]}</div>
            <img src={img[id-1]} alt="Img" />
            <div className="blog-que">
                <div>About me</div>
                <div>{story[id - 1]}</div>
            </div>
        </div>
    </div>)
}

export default Blog;