/*This is an example to show a basic conditional logic.*/
const user = {
    name: 'William Walkley',
    age: 22,
    location: 'Wellington'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'anonymous'} </h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age} </p>}
        {getLocation(user.location)}
    </div>
);
