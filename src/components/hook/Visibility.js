import React, { useEffect } from 'react';

function Visibility(props) {
	// clean up
	// 1> component unmount
	useEffect(() => {
		console.log('2번> 보일 때(mount)');
		return () => {
			console.log('1번> 보이지 않을 때(unmount)');
		};
	});

	return <div>I'm Visibility</div>;
}

export default Visibility;
