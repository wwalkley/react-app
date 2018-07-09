class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.remove = this.remove.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.state = {
            count: 0
        }
    }
    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    remove() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);

            if (!isNaN(count)) {
                this.setState(() => ({ count }))
            }
        } catch (e) {

        }

    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count){
                    localStorage.setItem('count', this.state.count);
        }
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.remove}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'));




// let count = 0;
// const addOne = () => {
//     count++;
//     render();
// }

// const minusOne = () => {
//     count--;
//     render();
// }

// const reset = () => {
//     count = 0;
//     render();
// }

// const render = () => {
//     const templateTwo = (
//         <div>
//             <h1> Count: {count}</h1>
//             <button onClick={addOne}> +1 </button>
//             <button onClick={minusOne}> -1 </button>
//             <button onClick={reset}> reset </button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };



// const appRoot = document.getElementById('app');
// render();

