import React, { useState } from 'react';

/**
 *  Ref 예제
 *  1. Callback 방식
 *  2. createRef() 방식
 */
class RefSample extends React.Component {
	MyUserNameInput = null;
	MyAgeInput = React.createRef();

	state = {
		username: '',
		age: 0
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		const { username, age } = this.state;

		return (
			<>
				<input
					name="username"
					value={username}
					// ref callback 을 이용하여 설정하는 방법
					ref={ref => (this.MyUserNameInput = ref)}
					onChange={this.handleChange}
				/>
				<button onClick={() => this.MyUserNameInput.focus()}>
					Callback 방식
				</button>
				<input
					name="age"
					value={age}
					onChange={this.handleChange}
					ref={this.MyAgeInput}
				/>
				<button onClick={() => this.MyAgeInput.current.focus()}>
					createRef방식
				</button>
			</>
		);
	}
}

export default RefSample;
