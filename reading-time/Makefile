build:
	if [ -d "dist" ]; then rm -rf dist; fi # delete dist folder if it exists
	npx tsc --build # build the extension
	mkdir dist/scripts
	mv dist/content.js dist/scripts/content.js
	mv dist/content.js.map dist/scripts/content.js.map
	cp -r src/images dist/images
	cp src/manifest.json dist/manifest.json
