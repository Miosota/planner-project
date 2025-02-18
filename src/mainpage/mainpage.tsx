import "./mainpage.scss";
import Slides from "../slides/slides";
import ProjectTimer from "../projecttimer/projecttimer";

function MainPage() {
    return (
        <main className="main-page">            
            <section className="slides-section">
                <h1>MY NEW PROJECT</h1>
                <Slides />       
            </section>
            <section className="project-timer-section">
                <h1 style={{fontSize:"4rem"}}>Project will be ready in</h1>
                <ProjectTimer />
            </section>
            <footer style={{height:"60px", backgroundColor:"#000"}}>
                <span style={{padding:"30px"}}>Contact information will be here</span>
            </footer>
        </main>
    );
}

export default MainPage;