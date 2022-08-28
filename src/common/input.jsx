import React from 'react';
const Input = (props) => {
    const {type,handleChange,value}= props
    return (
        <textarea id ='comment-field' type='text-area' className='input' onChange={handleChange} value={value} />
      );
}
 
export default Input;