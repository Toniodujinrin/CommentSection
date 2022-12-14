import React, { Component } from 'react';
import Input from './common/input';
class ActiveComment  extends Component {
    state ={ 
        comment:''
     } 
handleChange=({currentTarget:input})=>{
    this.setState({comment:input.value})
}
handleSubmit=(e)=>{
    e.preventDefault()

}

    render() { 
        const{comment}= this.state
        return (
            <form onSubmit={this.handleSubmit}>
            <div >
            
            
            <div id='active-comment'>
            <div id='main-reply'>
            <div id='profile-pic'>
              <img id='pic'src={this.props.profilePic} alt="" />  
            </div>
            <div id='input'>
            <Input  kind='comment' handleChange= {this.handleChange} value={comment} ></Input>
            </div>
            </div>
            <div id='send-button-div'>
            <button id='send' className='button' disabled={!comment.length} onClick={()=>this.props.uploadComment(comment)}>
                SEND
            </button> 
            </div>
            
            
           </div>
           </div>
            </form>
            
        );
    }
}
 
export default ActiveComment;