// Sets up the routes.
module.exports.setup = function (app, validator) {
  /**
   * @swagger
   * /:
   *   get:
   *     summary: Say Hello world
   *     description: Returns the homepage
   *     responses:
   *       200:
   *         description: hello world
   */
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  /**
   * @swagger
   * tags:
   *   name: Users
   *   description: User management and login
   */

  /**
   * @swagger
   * tags:
   *   - name: Phone
   *     description: Phone number
   *   - name: Test
   *     description: Test
   */

  /**
   * @swagger
   * /users:
   *   get:
   *     summary: Returns users
   *     description: Returns users
   *     tags:
   *      - Users
   *     responses:
   *       200:
   *         description: users
   */
  app.get('/users', (req, res) => {
    res.json({
      username: 'Loc nguyen',
    });
  });

  /**
   * @swagger
   * /users:
   *   post:
   *     summary: Update user
   *     description: Update user
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: users
   */
  app.post('/users', (req, res) => {
    res.json(req.body);
  });

  /**
   * @swagger
   * /number:
   *   get:
   *     summary: test number
   *     description: test number
   *     tags: [Test]
   *     parameters:
   *       - $ref: '#/components/parameters/phoneEnum'
   *     responses:
   *       200:
   *         description: test number
   */
  app.get('/number', validator.validate('get','/number'), (req, res) => {
    res.json({num: 3});
  });

  /**
   * @swagger
   * /test:
   *   post:
   *     summary: test
   *     description: test
   *     tags: [Test]
   *     requestBody:
   *       $ref: '#/components/requestBodies/numObject'
   *     responses:
   *       200:
   *         description: number
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 num:
   *                   type: number
   */
  app.post('/test',validator.validate("post", "/test"), (req, res) => {
    res.json({
      num: 3
    });
  });

  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      error: {
        name: err.name,
        message: err.message,
        data: err.data,
      },
    });
  });
};


/**
 * Parameters with content are currently not displayed and cannot be used in "try it out" requests in swagger-ui
 * and not supported by express-openapi-validate to validate
 */

/**
 * express-openapi-validate supports validate parameters in path and query with type string
 */
/**
 * @swagger
 * components:
 *   parameters:
 *     phoneVN:
 *       name: phone
 *       description: VN phone number (09)+([0-9]{8})\b
 *       in: query
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: string
 *             pattern: '(09)+([0-9]{8})\b'
 *     phoneEnum:
 *       name: phone
 *       description: Select one in available array
 *       in: query
 *       required: true
 *       schema:
 *         type: array
 *         items:
 *           type: number
 *           maximum: 5
 *           exclusiveMaximum: true
 *         minItems: 3
 *         maxItems: 5
 *         uniqueItems: true
 *     password:
 *       name: password
 *       description: "User password (min: 2 - max: 128)"
 *       in: query
 *       required: true
 *       schema:
 *         type: string
 *         minLength: 2
 *         maxLength: 128
 */

/**
 * @swagger
 * components:
 *   requestBodies:
 *     numObject:
 *       content:
 *         application/json:
 *           schema:
 *             maxProperties: 3
 *             minProperties: 1
 *             type: object
 *             required: [num]
 *             properties:
 *               num:
 *                 type: number
 *                 minimum: 2
 *                 maximum: 10
 *                 multipleOf: 2
 *               arr:
 *                 type: array
 *                 items:
 *                   type: number
 *                   maximum: 5
 *                   exclusiveMaximum: true
 *                 minItems: 1
 *                 maxItems: 3
 *                 uniqueItems: true
 *   schemas:
 *     Pet:
 *       type: object
 *       required:
 *         - petType
 *       properties:
 *         petType:
 *           type: string
 *     Cat:
 *       allOf:
 *         - $ref: '#/components/schemas/Pet'
 *         - type: object
 *           properties:
 *             name:
 *               type: string
 *     Dog:
 *       allOf:
 *         - $ref: '#/components/schemas/Pet'
 *         - type: object
 *           properties:
 *             name:
 *               type: string
 *     Lizard:
 *       allOf:
 *         - $ref: '#/components/schemas/Pet'
 *         - type: object
 *           properties:
 *             name:
 *               type: string
 *   responses:
 *     MyResponseType:
 *       description: resoonse object
 *       content:
 *         application/json:
 *           schema:
 *             oneOf:
 *             - $ref: '#/components/schemas/Cat'
 *             - $ref: '#/components/schemas/Dog'
 *             - $ref: '#/components/schemas/Lizard'
 *             discriminator:
 *               propertyName: petType
 *               mapping:
 *                 dog: '#/components/schemas/Dog'
 */

