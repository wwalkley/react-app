import React from 'react';

const Option = (props) =>  (
    <div className='option'>
        <p className='option__text'>{props.count}. {props.content}</p>
        
        <button
            className='button button--link'
            onClick={(e) => { props.removeOption(props.content) }}>Remove
        </button>
    </div>
);


export default Option;