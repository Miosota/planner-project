import "./mainpage.scss";
import Slides from "../slides/slides";
import ProjectTimer from "../projecttimer/projecttimer";

function MainPage() {
    return (
        <main className="main-page">            
            <section className="slides-section">
                <h1>CREATE YOUR DAY</h1>
                <Slides />       
            </section>
            <section>
                <h1>Project will be ready in: </h1>
                <ProjectTimer />
            </section>

        </main>
    );
}

export default MainPage;