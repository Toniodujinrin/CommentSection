import React, { Component } from 'react';
import Score from './scorebutton';
import ActiveReply from './activeReply';
import ActiveEdit from './activeEdit';
import FunctionButtons from './functionButtons';


class Reply extends Component {
    


    render() { 
        const {
            score,
            user,
            createdAt,
            replyingTo,
            content,
            id,
            commentId,
            handleIncrease,
            handleDecrease,
            uploadReply,
            currentUser,
            handleDelete,
            handleUpdate,
            currentUserPic,
            openReply,
            openEdit,
            replyMode,
            editMode
            }=this.props
        return (
            <React.Fragment>
            <div id='reply'>
        <div id='score'>
          <Score id={id} score={score} commentId={commentId} handleIncrease={handleIncrease} handleDecrease={handleDecrease}/>
        </div>


       <div id='main'>
       <div id='func-buttons'>
        <FunctionButtons 
        openReply={openReply} 
        user={user} 
        currentUser={currentUser} 
        id={id} 
        commentId={commentId} 
        handleDelete={handleDelete}
        openEdit={openEdit}
        />
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
            
           <span id='replyingTo'>{`@${replyingTo},`}</span> <div>{(editMode.state&&(editMode.commentId===commentId)&&(editMode.id===id))?<ActiveEdit handleUpdate={handleUpdate} content={content} commentId={commentId} id={id}/>:<div>{content}</div> }</div>
        </div>
    
        </div> 
   
    </div>
    {
        (replyMode.state&&(replyMode.id===id)&&(replyMode.commentId===commentId))?<ActiveReply replyingTo={user.username} uploadReply={uploadReply} commentId={commentId} currentUserPic={currentUserPic}/>:<div></div>
    }
    </React.Fragment>
        );
    }
}
 
export default Reply;


