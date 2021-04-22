import {ClickedContext} from '../App';

const Counter2 = props => {
    return (
        <div style={{
            border: '1px solid #ccc',
            width: 200,
            margin: '0 auto'
        }}>
            <h2>Counter 2</h2>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
            </ClickedContext.Consumer>
        </div>
    )
}

export default Counter2