import React from 'react';
import { useState, useMemo, useCallback } from 'react';

/*
useCallback은 useMemo와 상당히 비슷한 함수입니다.
주로 렌더링 성능을 최적화해야 하는 상황에서 사용하는데요.
이 Hook을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성할 수 있습니다.
방금 구현한 Average 컴포넌트를 보세요.
onChange와 onInsert라는 함수를 선언해 주었지요?
 이렇게 선언하면 컴포넌트가 리렌더링될 때마다 이 함수들이 새로 생성됩니다.
  대부분의 경우 이러한 방식은 문제없지만,
  컴포넌트의 렌더링이 자주 발생하거나 렌더링해야 할 컴포넌트의 개수가 많아지면
  이 부분을 최적화해 주는 것이 좋습니다.
 */

const getAverage = numbers => {
	// 마찮가지로 값이 변경될 때 마다 평균값 재계산되고 있음.
	console.log('평균값 계산중...');
	if (numbers.length === 0) return 0;
	const sum = numbers.reduce((a, b) => a + b);
	const average = sum / numbers.length;
	return average;
};

/*
 useMemo: 함수형 컴포넌트 내부에서 발생하는 연산 최적화 할 수 있다.
 */
function UseCallback() {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState('');

	// // input 변경
	// const onChange = e => {
	// 	console.log('onChange() create');
	// 	setNumber(e.target.value);
	// };
	//
	// // 신규 추가
	// const onInsert = () => {
	// 	console.log('onInsert() create');
	// 	const newList = list.concat(parseInt(number, 10));
	// 	setList(newList);
	// 	setNumber('');
	// };

	const onChange = useCallback(e => {
		console.log('onChange() create!!');
		setNumber(e.target.value);
	}, []); // 컴포넌트가 처음 렌더링 될 때만 생성

	const onInsert = useCallback(() => {
		console.log('onInsert() create!!');
		const newList = list.concat(parseInt(number, 10));
		setList(newList);
		setNumber('');
	}, [number, list]); // number or list 가 변경 될 때만 생성
	//그리고 내부 콜백함수에서 사용하려면 꼭 전달해야함.

	// list 값이 변경 될 때만 평균값 계산함.
	const avg = useMemo(() => getAverage(list), [list]);

	return (
		<div>
			<label>Number :</label>
			<input type="text" value={number} onChange={onChange} />
			<button onClick={onInsert}>추가하기</button>
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

export default UseCallback;
