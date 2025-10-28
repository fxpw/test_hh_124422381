import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
// @ts-ignore
import { config } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

import screenfull from 'screenfull';
// @ts-ignore
import katex from 'katex';
import 'katex/dist/katex.min.css';
// @ts-ignore
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
// @ts-ignore
import mermaid from 'mermaid';

import highlight from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

import * as prettier from 'prettier';
import parserMarkdown from 'prettier/plugins/markdown';

config({
	editorExtensions: {
		prettier: {
			prettierInstance: prettier,
			parserMarkdownInstance: parserMarkdown,
		},
		highlight: {
			instance: highlight,
		},
		screenfull: {
			instance: screenfull,
		},
		katex: {
			instance: katex,
		},
		cropper: {
			instance: Cropper,
		},
		mermaid: {
			instance: mermaid,
		},
	},
});

// @ts-ignore
// import authMiddleware from './js/middlewares/auth';
import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import { loadRoutes } from './router';
const router = createRouter({
	history: createWebHistory(),
	routes: [],
});

loadRoutes().then((routes) => {
	routes.forEach(route => router.addRoute(route));
	// router.beforeEach(authMiddleware);
	const app = createApp(App);
	app.use(router);
	app.mount('#app');
}).catch((err) => {
	console.error("Ошибка при инициализации маршрутов:", err);
});
