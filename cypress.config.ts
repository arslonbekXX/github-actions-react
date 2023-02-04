import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '3q3aa8',
	e2e: {
		baseUrl: "http://localhost:3000",
		supportFile: false,
		video: false,
	},
});
