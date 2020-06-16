import React, { useState, useMemo } from 'react';

function UseMemoTest1() {
	const [number, setNumber] = useState('');
	const [numbers, setNumbers] = useState([]);

	const handleChange = e => {
		const { value } = e.target;
		setNumber(value);
	};
	const handleInsert = () => {
		if (number && !Number.isNaN(parseInt(number, 10))) {
			const newNumbers = numbers.concat(parseInt(number, 10));
			setNumbers(newNumbers);
			setNumber('');
		}
	};

	// 값, 객체의 값을 최적화 하고 싶을 경우 useMemo() 사용 한다.
	// 이 예제에서는 numbers 배열이 변경될 경우에만 평균값을 재 계산한다.
	const avg = useMemo(() => getAverage(numbers), [numbers]);

	return (
		<div>
			<h1>useMemo Sample Hook</h1>
			<ul>
				{numbers.map((n, idx) => <li key={idx}>{n}</li>)}
			</ul>
			<div>
				<input type="text" value={number} onChange={handleChange}/>
				<button onClick={handleInsert}>추가</button>
			</div>
			<p>
				{/*avg: {getAverage(numbers)}*/}
				평균 값: {avg}
			</p>
			<hr/>
		</div>
	);
}

function getAverage(numbers) {
	console.log('계산중..');
	if (numbers && numbers.length === 0) return 0;

	if (numbers.length > 0) {
		const total = numbers.reduce((a, b) => a + b);
		return total / numbers.length;
	}
	return null;
}


export default UseMemoTest1;
