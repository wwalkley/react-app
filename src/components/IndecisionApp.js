import React from 'react';
import AddOption from './AddOption.js'
import Options from './Options.js'
import Header from './Header.js'
import Action from './Action.js'
import Modal from './OptionModal.js'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined 
    }

    deleteOptions = () => {
        this.setState((prevState) => ({ options: [] }))
            ;
    };

    removeOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
            //filters through each option in the array. 
            //If logic is true it will return the option to the array. If false will remove option from array.
        }));
    };

    pick = () => {
        const rand = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rand];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    addOption = (option) => {

        if (!option) {
            return 'Enter a valid item to enter a value.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    };

    clearModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        })); 
    }



    //lifecycle methods

    componentDidMount() {
        //fetches the data. Tries to find local storage data for options. If nothing is there it will load default
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options: options }))
            }

        } catch (e) {

        }
        console.log('fetching data');
    }

    componentDidUpdate(prevProps, prevState) {
        //if previous state has changed from current one then local storage will be changed. This is simple databasing 
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    render() {

        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subTitle={subTitle} />
                <div className='container'>
                    <Action pick={this.pick} hasOptions={this.state.options.length > 0} />
                    <div className='widget'>
                        <Options removeOption={this.removeOption} options={this.state.options} deleteOptions={this.deleteOptions} />
                        <AddOption addOption={this.addOption} options={this.state.options} />
                    </div>
                </div>
                <Modal selectedOption={this.state.selectedOption} clearModal={this.clearModal} />
            </div>
        );
    }
}
