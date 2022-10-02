import React, { useState } from "react";
import video from "../data/video.js";
import Title from "./Title.js";
import Details from "./Details.js"
import Votes from "./Votes.js"
import Hide from "./Hide.js"

function App() {

  const [upvotes, setUpVotes] = useState(9210);
  const [downvotes, setDownVotes] = useState(185);

  const [hidden, setHidden] = useState(true);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Title title={video.title} />
      <Details views={video.views} created={video.createdAt} />
      <Votes upvotes={upvotes} setUpVotes={setUpVotes} downvotes={downvotes} setDownVotes={setDownVotes} />
      <Hide hidden={hidden} setHidden={setHidden}/>
    </div>
  );
}

export default App;
