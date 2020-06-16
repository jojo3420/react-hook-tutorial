import React from 'react';
import LoopSample from './components/LoopSample';
import RefSample from './components/RefSample';
import ErrorBoundary from './components/ErrorBoundary';
import MyComponent from './components/MyComponent';
import UseState from './hook/useState/UseState';
import UseEffect from './hook/UseEffect';
import UseReducer from './hook/useReducer/UseReducer';
import UseReducer2 from './hook/useReducer/UseReducer2';
import UseMemo from './hook/UseMemo';
import UseCallback from './hook/UseCallback';
import UseRef from './hook/UseRef';
import CustomHook from './hook/CustomHook';
import UseState2 from './hook/useState/useState2';
import UseReducerTest1 from './hook/useReducer/useReducerTest1';

class App extends React.Component {
	state = {
		visibility: false,
	};
	RefComponent = null;


	handleVisibility = () => {
			this.setState({
				visibility: !this.state.visibility,
			})
	}

	render() {
		// console.log(this.RefComponent);

		return (
			<div>
				{/*<ErrorBoundary>*/}
				{/*	<MyComponent />*/}
				{/*</ErrorBoundary>*/}
				{/*<LoopSample />*/}

				{/*상위 컴포넌트 에서 ref  사용 가능*/}
				{/*<RefSample ref={ref => (this.RefComponent = ref)} />*/}
				{/*<UseState />*/}
				{/*<UseEffect />*/}
				{/*<UseReducer />*/}
				{/*<UseReducer2 />*/}
				{/*<UseMemo />*/}
				{/*<UseCallback />*/}
				{/*<UseRef />*/}
				{/*<CustomHook />*/}

				{/*{ this.state.visibility && <UseState2 /> }*/}
				{/*<button onClick={this.handleVisibility}>show/hide</button>*/}

				<UseReducerTest1 />
			</div>
		);
	}
}

export default App;
