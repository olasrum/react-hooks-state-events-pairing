import React from "react";

function Details({ views, created }) {
    return (
        <div>
            <p>{views} Views | Uploaded {created}</p>
        </div>
    )

}

export default Details;