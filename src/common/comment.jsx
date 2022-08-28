import React, { Component } from 'react';
import Score from './scorebutton';
import ActiveReply from './activeReply';
import FunctionButtons from './functionButtons';
import ActiveEdit from './activeEdit';

class Comment extends Component {




    render() { 
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
            openReply
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
            <div id='top-bar'>
            <div id='user-info'> 
            <img src={user.image.png} alt="" />
            <p id='username'>{user.username}</p>
            <div>{(currentUser===user.username)?<small id='identifier'>You</small>:<div></div>}</div>
            
            <p>{createdAt}</p>
            </div>
            <FunctionButtons 
            openEdit={openEdit} 
            openReply={openReply} 
            user={user} 
            currentUser={currentUser} 
            handleDelete={handleDelete} 
            commentId={commentId}/>
            </div>
            <div id='content'>
            <div>
                {
                (this.state.editMode)?
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
        (this.state.replyMode)?<ActiveReply replyingTo={user.username} uploadReply={uploadReply} commentId={commentId} currentUserPic={currentUserPic}/>:<div></div>
        }
        </React.Fragment>
        );
    }
}
 




 
export default Comment;