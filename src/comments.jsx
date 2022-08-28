import React, { Component } from 'react';
import CommentAndReply from './common/commentAndReply';
const Comments = (props) => {
    const {
        comments,
        handleIncrease,
        handleDecrease,
        uploadReply,
        currentUser,
        handleDelete,
        handleUpdate,
        currentUserPic,
        openReply,
        openEdit
    
    }=props
    return ( 
        <div>
            
            {<ul>{
                
                comments.map(comment=>
                    <li key={comment.id}>
                    {
                    <CommentAndReply
                    content={comment.content}
                    score={comment.score}
                    user={comment.user} 
                    createdAt={comment.createdAt} 
                    replies={comment.replies}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease}
                    commentId= {comment.id}
                    uploadReply={uploadReply}
                    currentUser={currentUser}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                    currentUserPic={currentUserPic}
                    openReply={openReply}
                    openEdit={openEdit}
                    />
                    } </li>

                
                
                )}</ul>
            
            }
            
        </div>
     );
}
 
export default Comments;