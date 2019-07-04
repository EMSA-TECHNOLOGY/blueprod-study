import {controller, get} from "../../bluejs/decorators"

@controller('user')
export default class UserController {
    @get('')
    async getUser(ctx: any, next: Function) {
        console.log("getUser");

        return next();
    }
}
