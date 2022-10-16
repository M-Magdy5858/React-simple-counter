import './Counter.css';

function Counter(props) {
	return (
		<div className="counter">
			<h1>{props.count}</h1>
		</div>
	);
}

export default Counter;
