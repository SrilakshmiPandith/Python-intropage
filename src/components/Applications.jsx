import { useState } from "react";
import { applications } from "../data";

export default function Applications(){
    const [activeApp, setActiveApp] = useState(0);

    function handleNext(){
        if(activeApp===(applications.length-1)){
            setActiveApp(0);
        }
        else{
        setActiveApp((activeApp)=>activeApp+1);
        }
    }

    function handlePrev(){
        if(activeApp===0){
            setActiveApp(3);
        }
        else{
        setActiveApp((activeApp)=>activeApp-1);
        }
    }

    return(
        <div id="applications">
            <h2>{applications[activeApp].title}</h2>
            <div id="cont">
            <button className="button" onClick = {handlePrev}>&laquo; Prev</button>
            <img src={applications[activeApp].image} />
            <button className="button" onClick= {handleNext}>Next &raquo;</button>
            </div>
        </div>
    );
}