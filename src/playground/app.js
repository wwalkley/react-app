//  Components can be stateless functional components or class based components.
//  If a component is not using state it should be a stateless fucntional component.

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.pick = this.pick.bind(this);
        this.addOption = this.addOption.bind(this);
        this.removeOption = this.removeOption.bind(this);
        this.state = {
            options: []
        }
    }

    deleteOptions() {
        this.setState((prevState) => ({ options: [] }))
            ;
    }

    removeOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
            //filters through each option in the array. 
            //If logic is true it will return the option to the array. If false will remove option from array.
        }));
    }
    
    pick() {
        const rand = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rand];
        alert(option);

    }

    addOption(option) {

        if (!option) {
            return 'Enter a valid item to enter a value.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))

    }

    //lifecycle methods

    componentDidMount(){
        //fetches the data. Tries to find local storage data for options. If nothing is there it will load default
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options){
                this.setState(() => ({ options : options}))
            }

        } catch (e){

        }
        console.log('fetching data');
    }

    componentDidUpdate(prevProps, prevState){
        //if previous state has changed from current one then local storage will be changed. This is simple databasing 
        if (prevState.options.length !== this.state.options.length){
                const json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
        }
    }
    render() {

        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subTitle={subTitle} />
                <Action pick={this.pick} hasOptions={this.state.options.length > 0} />
                <Options removeOption={this.removeOption} options={this.state.options} deleteOptions={this.deleteOptions} />
                <Add addOption={this.addOption} options={this.state.options} />
            </div>
        );
    }
}



const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.subTitle}</h4>
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.pick}>What Should I do?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.deleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>There are currently no options</p>}
                {
                    props.options.map((option) => {
                        return <Option key={option} content={option} removeOption={props.removeOption} />
                    })


                }

            
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.content}
            <button
                onClick={(e) => { props.removeOption(props.content) }}>Remove
            </button>
        </div>
    );
}


class Add extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    addOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        console.log(error);

        this.setState(() => ({ error: error })) // this can just be return { error }

        if (!error) {
            e.target.elements.option.value = '';
        }
       
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type='text' name='option' />
                    <button> Add option </button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));