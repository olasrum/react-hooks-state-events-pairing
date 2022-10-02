import React from "react";


function Comments({ comments }){

    const userComments = comments.map((comment) => {
        return <div key={comment.id}>
                <h4>{comment.user}</h4>
                <p>{comment.comment}</p>
               </div>
            
    })

    return (
        <div>
            <h3>2 Comments</h3>
            {userComments}
        </div>
        
    )
}

export default Comments;