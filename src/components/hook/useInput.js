import React from 'react';
import { useReducer, useState } from 'react';

// velopert way - useReducer
// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case 'ADD':
// 			return {
// 				...state,
// 				[action.target.name]: action.target.value
// 			};
// 		default:
// 			return state;
// 	}
// };
// /**
//  * 리액트 커스텀 후크 만들기
//  * @param props
//  * @returns {*}
//  * @constructor
//  */
// function useInput(initalForm) {
// 	const [state, dispatch] = useReducer(reducer, initalForm);
//
// 	const onChange = event => {
// 		dispatch({
// 			type: 'ADD',
// 			target: event.target
// 		});
// 	};
//
// 	return [state, onChange];
// }
//
// export default useInput;

// jh way - useState
function useInput(initalObject) {
	const [state, setState] = useState(initalObject);

	const onChange = event => {
		const { name, value } = event.target;
		setState({ ...state, [name]: value });
	};

	return [state, onChange];
}

export default useInput;
