import React from "react";

interface MainProps {
	name: string;
	cy: string;
}

const Main: React.FC<MainProps> = ({ name, cy }) => {
	const [count, setCount] = React.useState(0);

	return (
		<div>
			<h1 data-cy={cy}>Hello {name}</h1>
			<button data-cy='decrement' onClick={() => setCount((v) => v - 1)}>
				Decrement
			</button>
			<h2 data-cy='count'>Count: {count}</h2>
			<button data-cy='increment' onClick={() => setCount((v) => v + 1)}>
				Increment
			</button>
		</div>
	);
};

export default Main;
