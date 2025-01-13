import ThemeSwitcher from "../theme/themeswitcher";
import "./navbar.css"
import { useEffect, useState } from "react";


function NavBar() {
    const [onscroll,setOnScroll] = useState(false);

    useEffect(() => {
        if(typeof window !== "undefined"){
            window.addEventListener("scroll", () => {
                setOnScroll(window.scrollY > 100)
            });
        }
    }); 

    return (
        <header className={`app-header ${onscroll ? "onscroll":""}` }>
            <h3>Logo will be here</h3>
            <ThemeSwitcher/>
        </header>
    )
}

export default NavBar;