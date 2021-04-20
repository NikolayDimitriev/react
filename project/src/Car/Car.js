import './Car.css'

const car = props => (
    <div className="Car">
        <h2>Car name: {props.name}</h2>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" value={props.name} onChange={props.onChangeName}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
);

export default car;