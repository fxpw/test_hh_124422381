#!/bin/bash

if [ ! -d node_modules ]; then
	if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi
fi
if [ "$NODE_ENV" = 'production' ]; then
	npm run dev
else
	npm run dev
fi


