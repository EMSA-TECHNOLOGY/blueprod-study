import {Next} from '../../bluejs/core';
import {controller, get} from '../../bluejs/decorators';

@controller('user')
export default class UserController {

    @get('')
    async getUser(ctx: any, next: Next) {
        console.log('getUser');

        return next();
    }
}
