

console.log("app js is running!");

//if statements
//ternary operators
//logical and operator


const object = {
    title: 'Indecision Apps',
    subtitle: 'This is some text',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        object.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    object.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * object.options.length);
    const option = object.options[randomNumber];
    alert(option);
};




const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{object.title}</h1>
            {object.subtitle && <p>{object.subtitle}</p>}
            <p> {object.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <button disabled={object.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            {
                object.options.map((option) => {
                    return <li key={option} >{option} </li>
                })
            }
            <ol>

            </ol>

            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button> Add option </button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();



