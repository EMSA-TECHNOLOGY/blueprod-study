import {controller, get} from "../../bluejs/decorators"
import {Bluejs} from "../../bluejs";


@controller('user')
export default class UserController {
    constructor() {
        const bluejs = new Bluejs();

        bluejs.router.get('/user', function (ctx, next: Function) {
            console.log("xxx");
            return next();
        })
    }

    @get('/test')
    async getUser(ctx: any, next: Function) {
        console.log("user test");

        return next();
    }
}
