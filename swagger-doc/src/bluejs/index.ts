import * as Koa from 'koa';
import * as Router from 'koa-router';
import {join} from 'path';
import Utils from './utils'

// import * as swaggerRouter from '../modules/index';
import router from "../modules/index3";

import {createServerOptions} from "./interfaces";

export class Bluejs {
    private static singleton: Bluejs;
    private app: Koa;
    private debug: boolean;
    public readonly router: Router;

    constructor(options?: createServerOptions) {
        if (Bluejs.singleton) {
            return Bluejs.singleton;
        }

        this.app = new Koa();
        this.debug = options.debug;
        this.router = new Router();

        if (typeof options.middleware === "object" && options.middleware.length > 0) {
            options.middleware.forEach((mdw: Function) => {
                this.app.use(mdw as any);
            });
        }

        this.app.use(this.router.routes());

        this.app.use((router as any).routes());
        // this.app.use(swaggerRouter.allowedMethods());

        this.app.listen(options.port);
        Bluejs.singleton = this;
        Bluejs.bootstrap(options.srcDir, options.bootstrapDir, options.bootstrapExt);

        console.info('Bluejs server running on port ' + options.port);
    }

    static bootstrap(srcDir: string, bootstrapDir: string | string[], bootstrapExt: string) {
        if (!bootstrapDir) {
            return;
        }

        bootstrapDir = Array.isArray(bootstrapDir) ? bootstrapDir : [bootstrapDir];
        bootstrapDir.forEach(async (dir: string) => {
            const path = join(srcDir, dir);

            await Utils.bootstrap(path, bootstrapExt);
        })
    }
}
