import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    addOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        console.log(error);


        this.setState(() => ({ error: error })) // this can just be return { error }

        if (!error) {
            e.target.elements.option.value = '';
        }

    };
    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.addOption}>
                    <input className='add-option__input' type='text' name='option' />
                    <button className='button'> Add option </button>
                </form>
            </div>
        );
    }
}