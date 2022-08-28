import React, { Component } from 'react';
import Score from './scorebutton';
import ActiveReply from './activeReply';
import FunctionButtons from './functionButtons';
import ActiveEdit from './activeEdit';

class Comment extends Component {




    render() { 
        const id = undefined
        const{
            currentUser,
            score,
            uploadReply,
            user,
            createdAt,
            content,
            commentId,
            handleIncrease,
            handleDecrease,
            handleDelete,
            handleUpdate,
            currentUserPic,
            openEdit,
            openReply,
            editMode,
            replyMode
        }= this.props
        return (
            <React.Fragment>
            <div id='comment'>
            <div id='score'>
               <Score 
                score={score} 
                commentId={commentId}
                handleDecrease={handleDecrease} 
                handleIncrease={handleIncrease}/>
            </div>
    
    
           <div id='main'>   
           <div id='func-buttons'>
           <FunctionButtons 
            openEdit={openEdit} 
            openReply={openReply} 
            user={user} 
            currentUser={currentUser} 
            handleDelete={handleDelete} 
            commentId={commentId}/>
            </div>
            <div id='top-bar'>
            <div id='user-info'> 
            <img src={user.image.png} alt="" />
            <p id='username'>{user.username}</p>
            <div>{(currentUser===user.username)?<small id='identifier'>You</small>:<div></div>}</div>
            </div>
            <p>{createdAt}</p>
            </div>
            
         
            
            <div id='content'>
            <div>
                {
                (editMode.state&&editMode.commentId==commentId&&editMode.id===id)?
                <ActiveEdit 
                handleUpdate={handleUpdate} 
                content={content} 
                commentId={commentId} 
                />
                :
                <div>
                    {content}
                </div> 
                }
            </div> 
            </div>
            </div>
           
        </div>
        {
        (replyMode.state&&replyMode.commentId===commentId&&replyMode.id===id)?<ActiveReply replyingTo={user.username} uploadReply={uploadReply} commentId={commentId} currentUserPic={currentUserPic}/>:<div></div>
        }
        </React.Fragment>
        );
    }
}
 




 
export default Comment;