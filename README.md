# Unhandled Async Error in Express.js

This repository demonstrates a common error in Express.js applications where errors occurring within asynchronous operations after receiving a request are not handled correctly.  The server may crash or fail silently without providing any useful error messages. This example showcases the issue and proposes a solution.

## Bug Description

The server receives POST requests to the `/data` endpoint.  It processes the request body asynchronously. If an error occurs during the asynchronous processing, the error is unhandled, leading to a potential crash or undefined behavior.

## How to Reproduce

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to start the server.
5. Send a POST request to `http://localhost:3000/data` with a JSON payload containing `{"value":"error"}`.
6. Observe that the server does not handle the error gracefully.