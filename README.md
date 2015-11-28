# requirejs-example

RequireJS can load:
- Traditional scripts
- AMD modules: Asynchronous Module Definitions.

AMD is an advanced form of the "module pattern", used to encapsulate JavaScript and protect it from the global scope.

CommonJS also exists and is a module ecosystem for JavaScript, which exposes the require() method, exports object, etc.
However, it has been built for server-side usage, and one will need 3rd party tool to add it to the client-side, e.g. Browserify.

AMD brings the benefits of a module system to front-end development.
It also comes with an optimizer, r.js, which can be used with Node.js.
