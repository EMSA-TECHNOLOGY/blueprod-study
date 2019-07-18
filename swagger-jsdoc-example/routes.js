// Sets up the routes.
module.exports.setup = function(app) {
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
   * definitions:
   *   Login:
   *     required:
   *       - username
   *       - password
   *     properties:
   *       username:
   *         type: string
   *       password:
   *         type: string
   *       path:
   *         type: string
   */

  /**
   * @swagger
   * tags:
   *   name: Users
   *   description: User management and login
   */

  /**
   * @swagger
   * tags:
   *   - name: Accounts
   *     description: Accounts
   *   - name: Login
   *     description: Login
   *   - name: Phone
   *     description: Phone number
   *   - name: Test
   *     description: Test
   */

  /**
   * @swagger
   * /login:
   *   post:
   *     summary: Login to website
   *     description: Login to the application
   *     tags: [Users, Login]
   *     consumes:
   *       - application/x-www-form-urlencoded
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/username'
   *       - $ref: '#/parameters/password'
   *     responses:
   *       200:
   *         description: login
   *         schema:
   *           $ref: '#/definitions/Login'
   */
  app.post('/login', (req, res) => {
    res.json(req.body);
  });

  /**
   * @swagger
   * /users:
   *   get:
   *     summary: Returns users
   *     description: Returns users
   *     tags:
   *      - Users
   *     produces:
   *      - application/json
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
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/username'
   *     responses:
   *       200:
   *         description: users
   */
  app.post('/users', (req, res) => {
    res.json(req.body);
  });

  /**
   * @swagger
   * /phonevn:
   *   post:
   *     summary: test VN phone number
   *     description: test VN phone number
   *     tags: [Phone]
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/phoneVN'
   *     responses:
   *       200:
   *         description: login
   *         schema:
   *           $ref: '#/definitions/Login'
   */
  app.post('/phonevn', (req, res) => {
    res.json(req.body);
  });

  /**
   * @swagger
   * /phoneenum:
   *   post:
   *     summary: Select one phone
   *     description: Select one phone number
   *     tags: [Phone]
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/phoneEnum'
   *     responses:
   *       200:
   *         description: login
   *         schema:
   *           $ref: '#/definitions/Login'
   */
  app.post('/phoneenum', (req, res) => {
    res.json(req.body);
  });

  /**
   * @swagger
   * /number:
   *   post:
   *     summary: Select one phone
   *     description: Select one phone number
   *     tags: [Test]
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/number'
   *     responses:
   *       200:
   *         description: login
   *         schema:
   *           $ref: '#/definitions/Login'
   */
  app.post('/number', (req, res) => {
    res.json(req.body);
  });
};

/**
 * @swagger
 *   parameters:
 *     number:
 *       name: number
 *       description: number with min 2 max 200 multipleOf 10
 *       in: query
 *       required: true
 *       type: number
 *       minimum: 2
 *       maximum: 200
 *       multipleOf: 10
 */

/**
 * @swagger
 *   parameters:
 *     phoneVN:
 *       name: phone
 *       description: VN phone number (09)+([0-9]{8})\b
 *       in: query
 *       required: true
 *       type: string
 *       pattern: (09)+([0-9]{8})\b
 */

/**
 * @swagger
 *   parameters:
 *     phoneEnum:
 *       name: phone
 *       description: Select one in available array
 *       in: query
 *       required: true
 *       type: number
 *       enum: [0912345678, 0987654321, 123457890]
 */

/**
 * @swagger
 *   parameters:
 *     password:
 *       name: password
 *       description: "User password (min: 2 - max: 128)"
 *       in: formData
 *       required: true
 *       type: string
 *       minLength: 2
 *       maxLength: 128
 */
