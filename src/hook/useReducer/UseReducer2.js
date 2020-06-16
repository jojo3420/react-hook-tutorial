import React, { useReducer } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return { ...state, [action.target.name]: action.target.value };
		default:
			return state;
	}
};

/**
  리듀서 응용2
  n개의 상태를 관리하기
 */
function UseReducer2(props) {
	// state, dispath 함수 리턴
	const [state, dispatch] = useReducer(reducer, {
		username: '',
		nickname: ''
	});

	const handleChange = target => {
		// 리듀서 디스패치 함수 호출하여 상태 변경 시도
		dispatch({ type: 'CHANGE', target });
	};

	const { username, nickName } = state;

	return (
		<div>
			<label>username : </label>
			<input
				type="text"
				name={'username'}
				value={username}
				onChange={e => handleChange(e.target)}
			/>
			<p>{username}</p>
			<br />
			<label>nickName: </label>
			<input
				type="text"
				name={'nickName'}
				value={nickName}
				onChange={e => handleChange(e.target)}
			/>
			<p>{nickName}</p>
		</div>
	);
}

export default UseReducer2;
