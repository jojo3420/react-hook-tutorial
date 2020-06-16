import React, { useState, useRef } from 'react';


// ref 값은 렌더링이 영향을 미치지 않는다.
function UseRefTest2() {
	const [name, setName] = useState('');
	const [list, setList] = useState([
		{ id: 0, name: 'aa' },
		{ id: 1, name: 'bb' },
		{ id: 2, name: 'cc' },
	]);

	const idRef = useRef(3);

	const handleChange = e => {
		const { value } = e.target;
		setName(value);
	};

	const onInsert = () => {
		if (name) {
			const newList = list.concat({ id: idRef.current++, name });
			setList(newList);
			setName('');
		}
	}


	return (
		<div>
			<h2>useRef 이용 하여 ID 값 저장하기</h2>
			<ul>
				{list.map(m => <li key={m.id}>{m.id} - {m.name}</li>)}
			</ul>
			<input type="text" value={name} onChange={handleChange} />
			<button onClick={onInsert}>register</button>
			<div>
				<p>ref 값 변화는 리렌더링에 영향을 주지 않음</p>
				<button onClick={() => idRef.current+= 1}>ref 아이디 증가</button>
			</div>
		</div>
	);
}

export default UseRefTest2;
