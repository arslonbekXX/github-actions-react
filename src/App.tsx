import React from "react";

interface AppProps {}

const App: React.FC<AppProps> = () => {
	const [count, setCount] = React.useState(0);
	return (
		<div>
			<button onClick={() => setCount((v) => v - 1)}>Decrement</button>
			<h1 style={{ display: "inline-block" }}>Count: {count}</h1>
			<button onClick={() => setCount((v) => v + 1)}>Increment</button>
		</div>
	);
};

export default App;
