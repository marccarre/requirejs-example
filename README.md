# requirejs-example

RequireJS can load:
- Traditional scripts
- AMD modules: Asynchronous Module Definitions.

AMD is an advanced form of the "module pattern", used to encapsulate JavaScript and protect it from the global scope.

CommonJS also exists and is a module ecosystem for JavaScript, which exposes the require() method, exports object, etc.
However, it has been built for server-side usage, and one will need 3rd party tool to add it to the client-side, e.g. Browserify.

AMD brings the benefits of a module system to front-end development.
It also comes with an optimizer, r.js, which can be used with Node.js.


Madge can be used to identify circular dependencies in a project:

    $ npm install -g madge
    $ madge --format amd --circular to-do/src


R.js can be used to minify and concatenate JavaScript files:

    $ npm install -g requirejs
    $ r.js -o to-do/build/build.js
    $ open to-do/dist/index.html


Almond can be used as an alternative to RequireJS: it is a lightweight (~1 KB) loader supporting AMD modules.
In `to-do/build/build.js`, replace:

    modules: [{ name: 'main' }]

with: 

    name: '../external/almond'

and re-run the build.
In `to-do/dist/index.html`, replace `require.js` with `almond.js`, and you should see in your console that this file is used instead, and contains all our code, minified and concatenated:

    $ du -h to-do/dist/external/almond.js 
     76K  to-do/dist/external/almond.js

which makes you save a few kilobytes:

    $ du -h to-do/dist/external/require.js 
     16K  to-do/dist/external/require.js
    $ du -h to-do/dist/src/main.js 
     72K  to-do/dist/src/main.js
