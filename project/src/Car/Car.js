const car = props => (
    <div style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        display: 'block',
        padding: '10px',
        marginBottom: '10px',
        boxShadow: '0px 4px 5px 0px rgba( 0, 0, 0, .14)'
    }}>
        <h2>Car name: {props.name}</h2>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" value={props.name} onChange={props.onChangeName}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
);

export default car;