import React, { useReducer } from 'react';


const reducer  = (state = {}, action) => {
	switch (action.type) {
		case 'INCREASE':
			return {
				...state,
				number: state.number + 1,
			};
		case 'DECREASE':
			return {
				...state,
				number: state.number - 1,
			}
		default:
			return state;
	}

}


function UseReducerTest1() {
	const [state, dispatch] = useReducer(reducer, {
		number: 0,
	});

	return (
		<div>
			<h1>{state.number}</h1>
			<button onClick={() => dispatch({ type: 'INCREASE'})}>increase</button>
			<button onClick={() => dispatch({ type: 'DECREASE'})}>decrease</button>
		</div>
	);
}



export default UseReducerTest1;
