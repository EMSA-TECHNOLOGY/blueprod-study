import { SwaggerRouter } from 'koa-swagger-decorator';
import CompanyRouter from './company';
// import CustomerRouter from './customer';

const swaggerRouter = new SwaggerRouter();

// http://localhost:3000/api/v1/swagger-html: User API
(swaggerRouter as any).use('/api/v1', (CompanyRouter as any).routes());

// http://localhost:3000/api/v2/swagger-html: Customer API
// (router as any).use('/api/v2', (CustomerRouter as any).routes());

// swagger docs available at http://localhost:3000/swagger-html (All API)
swaggerRouter.swagger({
    title: 'API V2 Server',
    description: 'API DOC',
    version: '1.0.0'
});
swaggerRouter.mapDir(__dirname);

export default swaggerRouter;
