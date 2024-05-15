import TabButton from "./TabButton";
import { features } from "../data";
import { useState } from "react";
import FeatureContent from "./FeatureContent";

export default function Features(){
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(topic){
        setSelectedTopic(topic);
        console.log(selectedTopic);
    }
    let tabContent = <p>Please select a topic</p>
    if(selectedTopic){
        tabContent = <FeatureContent {...features[selectedTopic]}></FeatureContent>
    }

    return(
        <>
        <div id="features">
        <ul>
           <TabButton isSelected={selectedTopic==="opensource"} onClick={()=> handleSelect('opensource')}>Open Source</TabButton>
           <TabButton isSelected={selectedTopic==="dynamic"} onClick={()=> handleSelect('dynamic')}>Dynamic</TabButton>
           <TabButton isSelected={selectedTopic==="largecommunity"} onClick={()=> handleSelect('largecommunity')}>Large Community</TabButton>
        </ul>
        {tabContent}
        </div>
        </>
    );
}