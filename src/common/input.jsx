import React from 'react';
const Input = (props) => {
    const {type,handleChange,value}= props
    return (
        <input id ='comment-field' type='text' className='input' onChange={handleChange} value={value} />
      );
}
 
export default Input;