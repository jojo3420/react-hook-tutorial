import React from 'react';
import { useState, useCallback, useMemo, useRef } from 'react';

const getAverage = numbers => {
	if (numbers.length === 0) return 0;
	const total = numbers.reduce((a, b) => a + b);
	return total / numbers.length;
};

/*
	 useRef 기본
	 1. 참조할 DOM 요소를 만들때: DOM 엘리먼트에 직접 접근할 때 사용하며
	  주로 element 의 focus 주거나 돔 엘리먼트 높이 등을 얻어 올 때  사용
	 2. 참조할 값을 생성할 때 : 이 값은 렌더링에는 사용되지 않고 전혀 영향을 줄 수 없음
 */
function UseRef(props) {
	const [number, setNumber] = useState('');
	const [list, setList] = useState([]);
	const inputEl = useRef(); // ref element 생성

	// input 요소 상태 관리
	const handleChange = useCallback(e => {
		setNumber(e.target.value);
	}, []);

	// list에 추가하기
	const handleInsert = useCallback(() => {
		const newList = list.concat(parseInt(number, 10));
		setList(newList);
		setNumber('');

		// @ TODO useRef!
		inputEl.current.focus();
	});

	// 평균값 계산
	const avg = useMemo(() => {
		return getAverage(list);
	}, [list]);

	return (
		<>
			<h2> 입력한 값들 평균값 계산 </h2>
			<div>
				<input
					type="text"
					name="number"
					value={number}
					onChange={handleChange}
					ref={inputEl} // 생성한 ref를 할당
				/>
				<button onClick={handleInsert}>추가하기</button>
			</div>
			<div>
				<ul>
					{list.map((item, idx) => (
						<li key={idx}>{item}</li>
					))}
				</ul>
			</div>

			<div>Avg: {avg}</div>
		</>
	);
}

export default UseRef;
