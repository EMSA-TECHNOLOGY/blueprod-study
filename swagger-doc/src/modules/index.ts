import { SwaggerRouter } from 'koa-swagger-decorator';
import UserRouter from './user';
import CustomerRouter from './customer';

const router = new SwaggerRouter();

(router as any).use('/api/v1', (UserRouter as any).routes());
(router as any).use('/api/v2', (CustomerRouter as any).routes());

// swagger docs available at http://localhost:3000/swagger-html
router.swagger({
    title: 'API V2 Server',
    description: 'API DOC',
    version: '1.0.0'
});
router.mapDir(__dirname);

export default router;
