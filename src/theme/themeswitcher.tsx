import React, { useEffect } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

// uses to change theme 

function ThemeSwitcher() {
    const [checked, setChecked] = React.useState(false);
    const [theme, setTheme] = React.useState("light");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);            
    }

    useEffect(() => {
        if (checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        } 
        document.querySelector('body')?.setAttribute('data-theme', theme);
    }, [checked, theme])  
   

    return (
        <FormControlLabel control={<Switch checked={checked} onChange={changeHandler}/>} 
        id="switch-theme" label={`${theme} theme`} />
    )
}

export default ThemeSwitcher;