import React, { useState, useEffect } from 'react';
import Visibility from './Visibility';
/*
	useEffect : componentDidMount() ,
	componentDidUpdate() 즉 render()가 정상적으로 실행된 이후 시점




 */
function UseEffect(props) {
	const [username, setUserName] = useState('');
	const [nickName, setNickName] = useState('');
	const [visibility, setVisibility] = useState(true);

	// 1. 최초 렌더링 시점 이후에만 호출
	// TODO: 2번째 파라미터 빈 배열
	useEffect(() => {
		console.log('최초 마운트 될 때에만 호출.');
	}, []);
	//
	// 2. render() 함수 호출 이후 실행후 리렌더링 될 경우 반복적으로 실행(최적화 X)
	// TODO: 2번째 파라미터 없음
	// useEffect(() => {
	// 	console.log('렌더링이 완료된 이후 시점!');
	// 	console.log({ username, nickName });
	// });

	// 3. 특정 값이 변경될 때만 렌더링 실행(최적화)
	// TODO: 최적화 진행 : 2번째 파라미터에 배열로 속성 지정
	// componentDidUpdate LifeCycle
	// useEffect(() => {
	// 	console.log('changed... username: ', username);
	// }, [username]);

	// 4. clean up: 2가지 기능 활용 가능함
	// 1> component unmount
	// 2> update 이전 시점!
	// TODO: 리턴 함수가 있음
	useEffect(() => {
		console.log('2번> effect : ', { username });
		return () => {
			console.log('1번> unmount... or 값 변경 이전 시점');
		};
	}, [username]);

	return (
		<div>
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
			<br />
			<button onClick={() => setVisibility(!visibility)}>가시성</button>
			<div>{visibility ? '보이기' : '숨기기'}</div>
			{visibility && <Visibility />}
		</div>
	);
}

export default UseEffect;
