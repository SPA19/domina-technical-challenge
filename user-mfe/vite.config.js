import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "userMFE",
			filename: "remoteEntry.js",
			exposes: {
				"./UserModule": "./src/UserModule.jsx",
			},
			shared: {
				react: {
					singleton: true,
					requiredVersion: "^18.0.0",
				},
				"react-dom": {
					singleton: true,
					requiredVersion: "^18.0.0",
				},
			},
		}),
	],
	build: {
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
	server: {
		port: 5001,
		cors: true,
		strictPort: true,
	},
	preview: {
		port: 5001,
		cors: true,
		strictPort: true,
	},
});