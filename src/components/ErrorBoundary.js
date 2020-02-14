import React, { Component } from 'react';

class ErrorBoundary extends Component {
	state = {
		error: false,
		errorInfo: null
	};

	componentDidCatch(error, errorInfo) {
		console.info('componentDidCatch: ', error, errorInfo);
		debugger;
		this.setState({
			error: true,
			errorName: error.name,
			errorMessage: error.message,
			errorInfo: errorInfo.componentStack.toString()
		});
	}

	render() {
		const { error } = this.state;
		if (error) {
			return <div>에러가 발생했습니다.</div>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
