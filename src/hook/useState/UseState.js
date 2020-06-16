import React, { useState } from 'react';

/*
	함수 컴포넌트에서 상태를 관리하기
 */
function UseState() {
	// 개발 속성들로 선언
	const [username, setUserName] = useState('');
	const [nickName, setNickName] = useState('');

	// n개의 상태들 - 객체 형태로 관리
	const [form, setForm] = useState({
		age: 0,
		gender: false
	});

	return (
		<>
			<div>
				<h3>개별 상태로 관리</h3>
				<label>username : </label>
				<input
					type="text"
					name={'username'}
					value={username}
					onChange={e => setUserName(e.target.value)}
				/>
				<button onClick={() => console.log(username)}>username</button>
				<br />
				<label>nickName: </label>
				<input
					type="text"
					name={'nickName'}
					value={nickName}
					onChange={e => setNickName(e.target.value)}
				/>
				<button onClick={() => console.log(nickName)}>nickName</button>
			</div>
			<hr />
			<div>
				<h3>객체 형태로 상태 관리</h3>
				<form>
					<label>age: </label>
					<input
						type="text"
						name={'age'}
						value={form.age}
						onChange={e => {
							setForm({ [e.target.name]: e.target.value });
						}}
					/>
					<label>Man: </label>
					<input
						type="radio"
						name="gender"
						checked={form.gender === true}
						onChange={e => setForm({ [e.target.name]: true })}
					/>
					<label>Woman: </label>
					<input
						type="radio"
						name="gender"
						checked={form.gender === false}
						onChange={e => setForm({ [e.target.name]: false })}
					/>
				</form>
				<p>{form.age}</p>
				<p>logged: {form.gender ? 'Man' : 'Woman'}</p>
			</div>
		</>
	);
}

export default UseState;
