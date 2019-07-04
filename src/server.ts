import {Bluejs} from "./bluejs"

const {router} = new Bluejs({port: 3000, debug: true, middleware: [logMiddleware]});

import abc from "./modules/user/user.controller"

var a = new abc();

// router.get('/*', async (ctx) => {
//     ctx.body = 'Hello World!';
// });

async function logMiddleware(ctx: any, next: any) {
    console.log('Url:', ctx.url);

    await next();
}
