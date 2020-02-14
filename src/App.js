import React from 'react';
import LoopSample from './components/LoopSample';
import RefSample from './components/RefSample';
import ErrorBoundary from './components/ErrorBoundary';
import MyComponent from './components/MyComponent';
import UseState from './components/hook/UseState';
import UseEffect from './components/hook/UseEffect';
import UseReducer from './components/hook/UseReducer';
import UseReducer2 from './components/hook/UseReducer2';
import UseMemo from './components/hook/UseMemo';
import UseCallback from './components/hook/UseCallback';
import UseRef from './components/hook/UseRef';
import CustomHook from './components/hook/CustomHook';

class App extends React.Component {
	RefComponent = null;

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
				<CustomHook />
			</div>
		);
	}
}

export default App;
