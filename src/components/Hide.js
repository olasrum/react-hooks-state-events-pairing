import React from "react";
import video from "../data/video.js";
import Comments from "./Comments.js"

function Hide({ hidden, setHidden }) {

    function handleClick() {
        setHidden((hidden) => !hidden);
    }


    return (
    <div>
        <button onClick={handleClick}>{hidden ? "Hide Comments" : "Show Comments"}</button>
        <hr></hr>
        {hidden && <Comments comments={video.comments} />}
    </div>
    )  
}

export default Hide;