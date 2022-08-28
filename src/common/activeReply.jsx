import React, { Component } from 'react';
import Input from './input';

class ActiveReply extends Component {

    state ={ 
        reply:''
     } 
handleChange=({currentTarget:input})=>{
    this.setState({reply:input.value})
}
handleSubmit=(e)=>{
    e.preventDefault()

}

    render() { 
        const{reply}= this.state
        const{replyingTo,commentId,currentUserPic}=this.props
        return (
            
           <form onSubmit={this.handleSubmit}>
            <div id="active-comment">
            <div>
                <img src={currentUserPic.png} alt="" />
            </div> 
            <div>
                <Input 
                 kind='comment'
                 handleChange= {this.handleChange} 
                 value={reply} >
                </Input>
            </div>
            <div>
            <button className='button' disabled={!reply.length} onClick={()=>this.props.uploadReply(reply,replyingTo,commentId)}>
               REPLY
            </button> 
            </div>
            
            
            
            </div>
            </form>
           
        );
    }
}
 
export default ActiveReply;