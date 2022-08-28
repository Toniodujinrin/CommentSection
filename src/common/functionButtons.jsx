import React from 'react';
import {ReplyIcon,DeleteIcon,EditIcon} from './icons'
const FunctionButtons = ({openReply,openEdit,user,currentUser,handleDelete,commentId,id}) => {
    return ( 
        <div id='functions'>
        {
            (currentUser===user.username)?
            <div id='user-functions'>

            <div onClick={()=>handleDelete(commentId,id)} className='function-button' id='delete-button'>
           <div>
               <span>{DeleteIcon}</span>
            </div> 
            <div>
                <p>Delete</p>
            </div>
            </div>

           <div  onClick={()=>openEdit(commentId,id)} className='function-button' id='edit-button'>
           <div>
               <span>{EditIcon}</span>
            </div> 
            <div>
                <p>Edit</p>
            </div>
            </div>


            </div>:<div>

                      <div onClick={()=>openReply(commentId,id)} className='function-button' id='reply-button'>
           <div>
               <span>{ReplyIcon}</span>
            </div> 
            <div>
                <p>Reply</p>
            </div>
        </div>
            </div>
        }
  
        </div>
        
     );
}
 
export default FunctionButtons ;