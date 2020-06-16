import React, { useCallback, useMemo, useState, useRef } from 'react';

function UseRefTest1() {
	const [value, setValue] = useState('');
	const [numbers, setNumbers] = useState([]);
	const inputRef = useRef(null);

	const onChange = useCallback(e => {
		const { value } = e.target;
		setValue(value);
	}, []);


	const onInsert = useMemo(() => {
		const fn = () => {
			if (value && !isNaN(parseInt(value, 10))) {
				const newList = numbers.concat(parseInt(value, 10));
				setNumbers(newList);
				setValue('');

				// ref effect
				if (inputRef.current) {
					inputRef.current.focus();
				}
			}
		}
		return fn;
	}, [value, numbers])

	const avg = useMemo(() => getAverage(numbers), [numbers]);

	return (
		<div>
			<h2>useCallback Test</h2>
			<ul>
				{numbers.map((n, i) => <li key={i}>{n}</li> )}
			</ul>
			<div>
				<input type="text"
							 value={value}
							 onChange={onChange}
							 ref={inputRef}
				/>
				<button onClick={onInsert}>insert</button>
			</div>
			<div>
				avg: {avg}
			</div>
			<hr />
		</div>
	);
}


function getAverage(numbers) {
	console.log('계산중...');
	if (numbers && numbers.length === 0) return 0;
	if (numbers) {
		const sum = numbers.reduce((a, b) => a + b);
		return sum / numbers.length;
	}
}

export default UseRefTest1;
