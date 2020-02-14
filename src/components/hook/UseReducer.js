import React, { useReducer } from 'react';

// 리듀서 함수는 파라미터로 현재 상태(state)와
// 업데이트를 위한 정보를 가진 액션(action)을 가지고
// 새로운 상태를 리턴한다.
// 리듀서에서 상태는 불변성을 유지해야 한다. { ...state, number: state.number +1}
const reducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { number: state.number + 1 };
		case 'DECREMENT':
			return { number: state.number - 1 };
		default:
			// 아무 액션에도 해당하지 않을 때는 기존 상태 리턴
			return state;
	}
};

/**
  리듀서1
  1개의 상태를 관리하기
 */
function UseReducer() {
	// 리듀서 함수, 초기값 전달
	const [state, dispatch] = useReducer(reducer, { number: 0 });

	return (
		<div>
			<h2>UseReducer</h2>
			<p>현재 상태 값은 {state.number} 입니다.</p>

			{/*리듀서 디스페치 함수 호출 */}
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>++1</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>--1</button>
		</div>
	);
}

export default UseReducer;
