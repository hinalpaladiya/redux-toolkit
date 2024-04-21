import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './reduxToolkit/counterSlice';
function App() {
	const mystate = useSelector((state) => state.counter.count)
	const dispatch = useDispatch()
	return (
		<div className="App">
			<h1>Redux Toolkit</h1>
			<input type='text' value={mystate} />
			<button onClick={()=> dispatch(increment())}>Plus</button>
			<button onClick={()=>dispatch(decrement())}>Minus</button>
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
		</div>
	);
}

export default App;
