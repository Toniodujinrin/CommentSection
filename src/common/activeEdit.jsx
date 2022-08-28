import React, { Component } from 'react';
import Input from './input';

class ActiveEdit  extends Component {
    state = { 
        originalContent:this.props.content,
        content:this.props.content
        
     } 

    handleChange=({currentTarget:input})=>{
        this.setState({content:input.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
    
    }
    render() {
        const{originalContent,content}= this.state 
        const{commentId,id,handleUpdate}= this.props
        return (
        <div>
        <form onSubmit={this.handleSubmit}>
        <div id='active-edit'>
       <Input handleChange={this.handleChange} value={this.state.content}/>
       <button onClick={()=>handleUpdate(commentId,id,content)} disabled={(!content.length)||(originalContent===content)}className='button' >
                UPDATE
       </button>
        </div>
        </form>
        </div>
        );
    }
}
 
export default ActiveEdit;