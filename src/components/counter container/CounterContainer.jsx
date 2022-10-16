import './CounterContainer.css';

import CounterActions from '../counter actions/CounterActions';
import Counter from '../counter/Counter';
import { useState } from 'react';

function CounterContainer() {

	let [count, setCount] = useState(0);

	function increase() {
		setCount(++count);
	}

	function decrease() {
		if (count > 0) {
			setCount(--count);
		}
	}

	return (
		<div className="container">
			<>
				<Counter count={count} />
				<CounterActions increase={increase} decrease={decrease} />
			</>
		</div>
	);
}

export default CounterContainer;
