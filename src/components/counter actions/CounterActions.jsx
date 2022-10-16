import './CounterActions.css';

function CounterActions({increase,decrease}) {
	return (
		<div className="actions">
			<button onClick={decrease} className='decrease'> 👎 </button>
			<button onClick={increase} className='increase'> 👍 </button>
		</div>
	);
}

export default CounterActions;
