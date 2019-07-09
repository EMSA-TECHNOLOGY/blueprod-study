import * as Koa from 'koa';
import * as Router from 'koa-router';
import {join} from 'path';
import {Utils} from './utils';

import {Middleware, CreateServerOptions} from './interfaces';

export class Bluejs {
    private static singleton: Bluejs;
    private app: Koa;
    private debug: boolean;
    public readonly router: Router;

    constructor(options?: CreateServerOptions) {
        if (Bluejs.singleton) {
            return Bluejs.singleton;
        }

        this.app = new Koa();
        this.debug = options.debug;
        this.router = new Router();

        if (typeof options.middleware === 'object' && options.middleware.length > 0) {
            options.middleware.forEach((mdw: Middleware) => {
                this.app.use(mdw as any);
            });
        }

        this.app.use(this.router.routes());
        Bluejs.singleton = this;
        Bluejs.bootstrap(options.srcDir, options.bootstrapDir, options.bootstrapExt)
            .then(() => {
                const swaggerRouter = require('../../modules/index');
                this.app.use((swaggerRouter.default as any).routes());
                this.app.listen(options.port);
                console.info('Bluejs server running on port ' + options.port);
            });
    }

    static async bootstrap(srcDir: string, bootstrapDir: string | string[], bootstrapExt: string): Promise<void> {
        if (!bootstrapDir) {
            return;
        }

        bootstrapDir = Array.isArray(bootstrapDir) ? bootstrapDir : [bootstrapDir];

        for (const dir of bootstrapDir) {
            const path = join(srcDir, dir);

            await Utils.bootstrap(path, bootstrapExt);
        }
    }
}
