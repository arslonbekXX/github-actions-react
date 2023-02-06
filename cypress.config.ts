import { defineConfig } from "cypress";

export default defineConfig({
	projectId: "nybah1",
	e2e: {
		baseUrl: "http://localhost:3000",
		supportFile: false,
		video: false,
	},
});
