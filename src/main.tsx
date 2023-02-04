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
			<button onClick={() => setCount((v) => v + 1)}>count: {count}</button>
		</div>
	);
};

export default Main;
