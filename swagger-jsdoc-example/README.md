# swagger-jsdoc example

## How to run example
```bash
$ npm install
$ node app.js or $ npm start
```

### Input
File .js or .yaml with annotation describes the API

### Output
Json describes the structure of the APIs, it is converted to yaml and saved in api-docs.yaml after everytimes app runs.

## How to use `swagger-jsdoc`
See [document](https://github.com/Surnet/swagger-jsdoc/blob/ce9ad851f305b047c563163f436b89a9119025e0/docs/GETTING-STARTED.md)

## Summary

- Parameters with content are currently not displayed and cannot be used in "try it out" requests in swagger-ui and are not supported by express-openapi-validate to validate
- Express-openapi-validate currently supports to validate parameters in path and query with type string, so use {ajvOptions: { coerceTypes: true }} when initialize OpenApiValidator instance to solve the problem
- The minimum number of elements in array is 2
