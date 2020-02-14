import React, { useState } from 'react';

function LoopSample() {
	const [names, setNames] = useState([
		{ id: 1, name: 'aaa' },
		{ id: 2, name: 'vvv' },
		{ id: 3, name: 'ccc' },
		{ id: 4, name: 'ddd' }
	]);
	const [inputText, setInputText] = useState('');
	const [nextId, setNextId] = useState(5);

	const handleNewName = () => {
		const newNames = names.concat({ nextId, name: inputText });
		setNames(newNames);
		setInputText('');
		setNextId(nextId + 1);
	};

	const handleRemove = id => {
		console.log({ id });
		const newNames = names.filter(name => name.id !== id);
		setNames(newNames);
	};

	return (
		<div>
			<input value={inputText} onChange={e => setInputText(e.target.value)} />
			<button onClick={handleNewName}>add</button>
			<ul>
				{names.map(name => (
					<li key={name.id} onDoubleClick={() => handleRemove(name.id)}>
						{name.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default LoopSample;
