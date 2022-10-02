import React from "react";

function Votes({ upvotes, downvotes, setUpVotes, setDownVotes }) {

    function increaseUpVotes() {
        setUpVotes((upvotes) => upvotes + 1);
    }

    function increaseDownVotes() {
        setDownVotes((downvotes) => downvotes + 1);
    }

    return (
        <div>
            <button onClick={increaseUpVotes}>{upvotes}👍</button>
            <button onClick={increaseDownVotes}>{downvotes}👎</button>
        </div>
    )

}

export default Votes;