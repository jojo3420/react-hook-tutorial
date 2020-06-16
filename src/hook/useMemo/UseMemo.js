import React from 'react';
import { useState, useMemo, useEffect } from 'react';

const getAverage = numbers => {
	// 마찮가지로 값이 변경될 때 마다 평균값 재계산되고 있음.
	console.log('평균값 계산중...');
	if (numbers.length === 0) return 0;
	const sum = numbers.reduce((a, b) => a + b);
	const average = sum / numbers.length;
	console.log({ average });
	return average;
};

/*
 useMemo: 함수형 컴포넌트 내부에서 발생하는 연산 최적화 할 수 있다.
 */
function UseMemo(props) {
	console.log('UseMemo() - 인풋 값이 변경 될 때 마다 렌더링됨');
	const [list, setList] = useState([]);
	const [number, setNumber] = useState('');
	const handleAppend = () => {
		console.log('handleAppend()');
		// [1, 2, 3].concat(4) => [1, 2, 3, 4]
		// [1, 2, 3].concat([4, 5]) => [1, 2, 3, 4, 5]
		const newList = list.concat(parseInt(number, 10));
		setList(newList);
		setNumber('');
	};

	// list 가 변경 될 때만(추가/삭제/변경) 평균값을 재 계산함.
	// 예를 들면 인풋 값(number) 의 값이 변경되어도 재계산하지 하고 list 에
	// 추가 될 경우에 감지하여 평균값을 계산함. deps [list]
	const avg = useMemo(() => getAverage(list), [list]);

	// useEffect(), useMemo() 차이점은??
	// useEffect 는 행동이도 useMemo는 결과를 리턴받는다.
	useEffect(() => {
		const average = getAverage(list);
		console.log('average: ', average);
	}, [list]);

	return (
		<div>
			<label>Number :</label>
			<input
				type="text"
				value={number}
				onChange={e => setNumber(e.target.value)}
			/>
			<button onClick={handleAppend}>추가하기</button>
			<ul>
				{list.map((item, idx) => (
					<li key={idx}>{item}</li>
				))}
			</ul>

			{/*<p>평균값 : {getAverage(list)}</p>*/}
			<p>평균값 : {avg}</p>
		</div>
	);
}

export default UseMemo;
