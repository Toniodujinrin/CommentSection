import React, { Component } from 'react';
import getData from './data';
import ActiveComment from './activeComment';
import Comments from './comments';
class App extends Component {
  state={
    data : getData(),
    editMode:{},
    replyMode:{}
  }
  uploadComment=(input)=>{
    const data = this.state.data
    const image = data.currentUser.image
    const createdAt = 'today'
    const replies = []
    const username= data.currentUser.username
    const score = 0;
    const content = input; 
    const user ={image,username}
    const id = data.comments.length + 1
    const comment = {id,createdAt,score,content,user,replies}
    data.comments.push(comment)
    this.setState(data)
    console.log(this.state.data)

  }
  handleIncrease=(id,commentId,)=>{
    if(id){
   const data = this.state.data
   const comment = data.comments.filter(commentid=> commentid.id === commentId )
   const reply = comment[0].replies.filter(reply=> reply.id===id)
   reply[0].score= reply[0].score+1
   
   this.setState({data})}
   else {
    const data = this.state.data
    const comment = data.comments.filter(comment=>comment.id===commentId)
    comment[0].score=comment[0].score+1
    this.setState({data})
   }
   
  }
  handleDecrease=(id,commentId)=>{
    if(id){
    const data = this.state.data
    const comment = data.comments.filter(comment=> comment.id === commentId )
    const reply = comment[0].replies.filter(reply=> reply.id===id)
    reply[0].score= reply[0].score-1
    this.setState({data})
    }
    else {
      const data = this.state.data
      const comment = data.comments.filter(comment=>comment.id===commentId)
      comment[0].score=comment[0].score-1
      this.setState({data})
    }

  }

  uploadReply=(reply,replyingTo,commentId)=>{
  const data = this.state.data;
  const comment = data.comments.filter(comment=>comment.id===commentId);
  const content = reply; 
  const id = comment[0].replies.length + 1;
  const createdAt = 'today';
  const user = {...data.currentUser};
  const score = 0;

  const newReply={id,content,createdAt,score,user,replyingTo};
  comment[0].replies.push(newReply);
  this.setState({data})
    

  }

  handleDelete=(commentId,id)=>{
  if(id){
   const data = {...this.state.data};
   const comment = data.comments.filter(comment=>comment.id===commentId);
   const newReplies = comment[0].replies.filter(reply=>reply.id !== id)
   comment[0].replies =newReplies
   this.setState({data})
  }
  else {
    const data = {...this.state.data};
    const newComments = data.comments.filter(comment=>comment.id !==commentId);
    data.comments= newComments;
    this.setState({data});

  }
  }

  handleUpdate=(commentId,id,content)=>{
    if(id){
    const data = {...this.state.data};
    const comment= data.comments.filter(comment=>comment.id===commentId);
    const reply = comment[0].replies.filter(reply=>reply.id===id);
    reply[0].content= content;
    this.setState({data});
  }
    else {
      const data ={...this.state.data};
      const comment = data.comments.filter(comment=>comment.id===commentId);
      comment[0].content=content;
      this.setState({data});
    }
    

  }
  openEdit=(commentId,id)=>{
    console.log(commentId,id)

  }
  openReply=(commentId,id)=>{
    console.log(commentId,id)

  }
  
  render() { 
    const {data}= this.state
    return (
      <React.Fragment>
      <Comments 
      comments ={data.comments} 
      handleIncrease={this.handleIncrease} 
      handleDecrease ={this.handleDecrease} 
      uploadReply={this.uploadReply} 
      currentUser={data.currentUser.username}
      currentUserPic={data.currentUser.image} 
      handleDelete={this.handleDelete} 
      handleUpdate={this.handleUpdate}
      openReply={this.openReply}
      openEdit={this.openEdit}
      />
      
      <ActiveComment 
      profilePic={data.currentUser.image.png} 
      username={data.currentUser.username} 
      uploadComment={this.uploadComment}/>
      </React.Fragment>


    );
  }
}
 
export default App ;
