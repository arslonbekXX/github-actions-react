import React from "react";

interface MainProps {
	name: string;
	cy: string;
}

const Main: React.FC<MainProps> = ({ name, cy }) => <h1 data-cy={cy}>Hello {name}</h1>;

export default Main;
