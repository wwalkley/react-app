import React from 'react';
import Option from './Option.js'

const Options = (props) =>  (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button className='button button--link' onClick={props.deleteOptions}>Remove All</button>
        </div>
        {props.options.length === 0 && <p className='widget-messege'>Please add an option to get started!</p>}
            {
                props.options.map((option, index) => {
                    return <Option key={option} count = {index +1} content={option} removeOption={props.removeOption} />
                })
            }   
    </div>
);


export default Options;