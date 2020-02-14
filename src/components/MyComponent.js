import React from 'react';

function MyComponent() {
	return <div>hello {this.props.missing.value}</div>;
}

export default MyComponent;
