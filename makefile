build:
	node ./bin/build.js

hash:
	node ./bin/hash.js

browserify:
	browserify -x ../../node_modules/lodash -x ../../node_modules/handlebars-runtime -x ../pack-it -r ./register.js > ./helpers.bundled.js
