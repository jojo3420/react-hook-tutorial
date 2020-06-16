import React, { useState, useEffect } from 'react';



function UseState2(props) {
	const [username, setUsername] = useState('');
	const [nickname, setNickname]  = useState('');
	const [form, setForm] = useState({
		name: '',
		age: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		if (name ===  'username') {
			setUsername(value);
		} else if (name === 'nickname') {
			setNickname(value)
		}
	};

	useEffect(() => {
		console.log('effect');
		console.log({ username });
		return () => {
			console.log('clean up!');
			console.log({ username });
		}
	}, [username]);

	const handleForm = e => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	return (
		<div>
			<h2>useState Test</h2>
			<div>
				<input type="text"
							 value={username}
							 name="username"
							 onChange={handleChange}
				/>
			</div>
			<div>username: {username}</div>
			<div>
				<input type="text"
							 value={nickname}
							 name="nickname"
							 onChange={handleChange}
				/>
			</div>
			<div>nickname: {nickname}</div>
			<hr/>
			<h2>form</h2>
			<input type="text" name="name"  value={form.name}
				onChange={handleForm}
			/>
			<div>{form.name}</div>
			<input type="number" name="age" value={form.age}
				onChange={handleForm}
			/>
			<div>{form.age}</div>
		</div>
	);
}

export default UseState2;
