import React from 'react';
import useInput from './useInput';

function CustomHook() {
	const [form, onChange] = useInput({
		username: '',
		nickname: '',
		age: 0
	});

	const { username, nickname, age } = form;

	const handleSubmit = e => {
		e.preventDefault();
		console.log({ username, nickname, age });
	};
	return (
		<div>
			<h3>커스텀 후크</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={username}
					name="username"
					onChange={onChange}
				/>
				<input
					type="text"
					value={nickname}
					name="nickname"
					onChange={onChange}
				/>
				<input type="number" value={age} name="age" onChange={onChange} />
				<button type="submit">확인</button>
			</form>
			<p>{username}</p>
			<p>{nickname}</p>
			<p>{age}</p>
		</div>
	);
}

export default CustomHook;
