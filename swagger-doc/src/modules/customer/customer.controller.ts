import {Next} from '../../bluejs/core';
import {controller, get} from '../../bluejs/decorators';

import {
    request,
    summary,
    body,
    tags,
    middlewares,
    path,
    description,
    prefix
} from 'koa-swagger-decorator';
//
const tag = tags(['Customer']);
//
// const userSchema = {
//     name: { type: 'string', required: true },
//     password: { type: 'string', required: true }
// };

@prefix('/customer')
@controller('customer')
export default class CustomerController {

    @request('get', '')
    @summary('customer list')
    @tag
    @get('')
    async getAll(ctx: any, next: Next) {
        console.log('getCustomer');

        return next();
    }
    //
    // @request('POST', '/create')
    // @summary('register user')
    // @description('example of api')
    // @tag
    // // @middlewares([logTime()])
    // @body(userSchema)
    // async createUser() {
    // }
    //
    // @request('get', '/{id}')
    // @summary('get user by id')
    // @tag
    // @path({ id: { type: 'string', required: true } })
    // async getOne(ctx) {
    //     const { id } = ctx.validatedParams;
    //     console.log('id:', id);
    //     const user = { name: 'foo' };
    //     ctx.body = { user };
    // }
    //
    // @request('DELETE', '/{id}')
    // @summary('delete user by id')
    // @tag
    // @path({ id: { type: 'string', required: true } })
    // async deleteOne(ctx) {
    //     const { id } = ctx.validatedParams;
    //     console.log('id:', id);
    //     ctx.body = { msg: 'success' };
    // }

}

const logTime = () => async (ctx, next) => {
    console.log(`start: ${new Date()}`);
    await next();
    console.log(`end: ${new Date()}`);
};
