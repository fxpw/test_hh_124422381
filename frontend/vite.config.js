import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
	plugins: [
		vue(),
		tailwindcss(),
	],
	server: {
		//host: '0.0.0.0',
		hmr: {
			host: 'localhost',
			// port: 5173
		},
	},
	build: {
		// buildDirectory: 'my_build_directory',
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.esm-bundler.js',
			'$shared': resolve(__dirname, 'src/shared'),
			'$js': resolve(__dirname, 'src/js'),
			'$modules': resolve(__dirname, 'src/modules'),
		},
	},
})
