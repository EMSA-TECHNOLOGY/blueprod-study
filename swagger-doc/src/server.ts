import {Next, CreateServerOptions} from './bluejs/core';
import {Bluejs} from './bluejs/core';

const options: CreateServerOptions = {
    port: 3000,
    debug: true,
    middleware: [logMiddleware],
    srcDir: __dirname,
    bootstrapDir: 'modules',
    bootstrapExt: 'module.ts',
};

new Bluejs(options);

async function logMiddleware(ctx: any, next: Next): Promise<void> {
    console.log('Middleware execute - Url:', ctx.url);

    await next();
}
