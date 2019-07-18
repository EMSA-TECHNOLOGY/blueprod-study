/* eslint import/no-extraneous-dependencies: 0 */

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const routes2 = require('./routes2');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const fs = require('fs');
const yaml = require('js-yaml');

const PORT = process.env.PORT || 3000;

// Initialize express
const app = express();
app.use(bodyParser.json()); // To support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // To support URL-encoded bodies
    extended: true,
  })
);


// Swagger definition
// You can set every attribute except paths and swagger
// https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md
const swaggerDefinition = {
  info: {
    // API informations (required)
    title: 'Swagger-jsdoc', // Title (required)
    version: require('./package').version, // Version (required)
    description: 'A sample API', // Description (optional)
  },
  host: `localhost:${PORT}`, // Host (optional)
  basePath: '/', // Base path (optional)swaggerSpec
  consumes: [
    'application/x-www-form-urlencoded',
    'multipart/form-data'
  ]
};

// Options for the swagger docs
const options = {
  // Import swaggerDefinitions
  swaggerDefinition,
  // Path to the API docs
  // Note that this path is relative to the current directory from which the Node.js is ran, not the application itself.
  apis: ['./routes*.js', './parameters.yaml'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);
fs.writeFileSync('api-docs.yaml', yaml.dump(swaggerSpec));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// const pathToSwaggerUi = swaggerUi.absolutePath();
// app.use('/test', express.static(pathToSwaggerUi));

// Serve swagger docs the way you like (Recommendation: swagger-tools)
app.get('/doc.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Set up the routes
routes.setup(app);
routes2.setup(app);

// Start the server
const server = app.listen(PORT, () => {
  const { port } = server.address();

  console.log('Example app listening at http://localhost:%s', port);
  console.log('http://localhost:%s/doc.json to see api json document', port);
  console.log('http://localhost:%s/swagger to see api json document in UI', port);
});
