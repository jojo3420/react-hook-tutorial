import React, { useState, useMemo, useCallback } from 'react';

function UseCallbackTest1() {
	const [value, setValue] = useState('');
	const [numbers, setNumbers] = useState([]);


	// 함수를 최적화(리렌더링 방지) 위해서는 useCallback
	// component 렌더링 될때 1회만 함수 생성
	// 하지만 콜솔 로는 확인 할수 없음, 그냥 그런가 부다 해야함..
	const onChange = useCallback(e => {
		// console.log('onChange()')
		const { value } = e.target;
		setValue(value);
	}, []);


	//  useMemo() 에서 함수를 리턴하면 useCallback 이다.
	const onInsert = useMemo(() => {
		// console.log('onInsert()')
		const fn = () => {
			if (value && !isNaN(parseInt(value, 10))) {
				const newList = numbers.concat(parseInt(value, 10));
				setNumbers(newList);
				setValue('');
			}
		}
		return fn;
	}, [value, numbers])

	// 보통 함수가 아닌 값일 경우 useMemo 를 사용!
	const avg = useMemo(() => getAverage(numbers), [numbers]);

	return (
		<div>
			<h2>useCallback Test</h2>
			<ul>
				{numbers.map((n, i) => <li key={i}>{n}</li> )}
			</ul>
			<div>
				<input type="text" value={value} onChange={onChange} />
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

export default UseCallbackTest1;
