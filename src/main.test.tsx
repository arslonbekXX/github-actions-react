import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Main from "./main";

test("renders learn react link", () => {
	render(<Main cy='heading' name='Netlify' />);

	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
