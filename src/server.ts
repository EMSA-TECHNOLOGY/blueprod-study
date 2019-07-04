import {Bluejs} from "./bluejs"

const options = {
    port: 3000,
    debug: true,
    middleware: [logMiddleware],
    srcDir: __dirname,
    bootstrapDir: 'modules',
    bootstrapExt: 'module.ts'
};

new Bluejs(options);

async function logMiddleware(ctx: any, next: any) {
    console.log('Middleware execute - Url:', ctx.url);

    await next();
}
