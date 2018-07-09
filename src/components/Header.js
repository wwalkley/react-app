import React from 'react';

const Header = (props) =>  (
    <div className='header'>
        <div className='container'>
            <h1 className='header__title'>{props.title}</h1>
            <h4 className='header__subtitle'>{props.subTitle}</h4>
        </div>
    </div>
);

Header.defaultProps = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer'
};


export default Header;