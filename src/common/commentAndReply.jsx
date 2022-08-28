import React from 'react';
import Reply from './reply';
import Comment from './comment';
const CommentAndReply = (props) => {
    const {
        score,
        user, 
        createdAt, 
        content,
        replies,
        commentId,
        handleIncrease,
        handleDecrease,
        uploadReply,
        currentUser, 
        handleDelete,
        handleUpdate,
        currentUserPic,
        openReply,
        openEdit
    }= props
    return ( 
        <div id='comments-and-replies'>
        <Comment 
        score={score} 
        user={user} 
        createdAt={createdAt} 
        content={content} 
        commentId= {commentId} 
        handleDecrease={handleDecrease} 
        handleIncrease={handleIncrease} 
        uploadReply={uploadReply} 
        currentUser={currentUser}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        currentUserPic={currentUserPic}
        openReply={openReply}
        openEdit={openEdit}
        />
        {
            (replies.length !== 0)?
        <ul id='list-of-replies'>
            {
            replies.map(reply=>
            <li key={reply.id}>
                <Reply 
                id={reply.id}
                score={reply.score} 
                content= {reply.content} 
                createdAt ={reply.createdAt} 
                replyingTo={reply.replyingTo} 
                user={reply.user} 
                commentId={commentId} 
                uploadReply={uploadReply} 
                handleIncrease={handleIncrease} 
                handleDecrease={handleDecrease} 
                currentUser={currentUser}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                currentUserPic={currentUserPic}
                openEdit={openEdit}
                openReply={openReply}
                />
            </li>
            )
            }
            </ul>:<div></div>
        }
        
        </div>

     );
}
 
export default CommentAndReply;