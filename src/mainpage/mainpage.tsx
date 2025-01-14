import "./mainpage.scss";
import Slides from "../slides/slides";

function MainPage() {
    return (
        <main className="main-page">            
            <section className="slides-section">
                <h1>CREATE YOUR DAY</h1>
                <Slides />       
            </section>
        </main>
    );
}

export default MainPage;