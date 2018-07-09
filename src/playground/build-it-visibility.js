class VisibilityApp extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    toggleVisibility() {
        this.setState((prevState) => {
            console.log(this.state.visibility)
            return {
                visibility: !prevState.visibility
            }
            console.log(this.state.visibility)
        })
    }


    render() {
        const options = ['Item 1', 'Item 2', 'Item 3'];
        return (
            <div>
                <h1>Visibility App</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide Options' : 'Show Options'}</button>
                <ol>
                    {
                        this.state.visibility && options.map((option)=>{
                            return <li key={option}>{option}</li>
                        })
                    }
                </ol>
            </div>
        )
    }

}


ReactDOM.render(<VisibilityApp />, document.getElementById('app'));










// const appRoot = document.getElementById('app');

// const object = {
//     title: 'Visibility Toggle',
//     options: ['Option 1', 'Option 2', 'Option 3'],
//     visibility: false
// };

// const toggleVisibility = () => {
//     object.visibility = !object.visibility;
//     render();
// };



// const render = () => {
//     const template = (
//         <div>
//             <h1>{object.title}</h1>
//             <button onClick={toggleVisibility}>{object.visibility ? 'Hide Options' : 'Show Options'}</button>
//             <ol >
//                 {object.visibility &&
//                     object.options.map((option) => {
//                         return <li key={option} >{option} </li>
//                     })
//                 }
//             </ol>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();