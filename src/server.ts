import {Bluejs} from "./bluejs"

const options = {
    port: 3000,
    debug: true,
    middleware: [logMiddleware],
    srcDir: __dirname,
    bootstrapDir: 'modules',
    bootstrapExt: 'module.ts'
};

const bluejs = new Bluejs(options);

async function logMiddleware(ctx: any, next: any) {
    console.log('Url:', ctx.url);

    await next();
}
