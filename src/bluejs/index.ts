import * as Koa from 'koa';
import * as Router from 'koa-router';

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
        this.router = new Router();
        this.debug = options.debug;

        if (typeof options.middleware === "object" && options.middleware.length > 0) {
            options.middleware.forEach((mdw: Function) => {
                this.app.use(mdw as any);
            });
        }

        this.app.use(this.router.routes());
        this.app.listen(options.port);

        if (this.debug) {
            console.info('Server running on port ' + options.port);
        }

        Bluejs.singleton = this;
    }
}
