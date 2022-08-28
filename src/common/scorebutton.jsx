import React from 'react';
const Score = (props) => {
    const{score,id,commentId,handleIncrease,handleDecrease}=props
    return ( 
           <div id='score-button'>
                <div  id='increase'onClick={()=>handleIncrease(id,commentId)}>+</div>
                <div id='score'>{score}</div>
                <div id='decrease' onClick={()=>handleDecrease(id,commentId)}>-</div>
            </div>
     );
}
 
export default Score;