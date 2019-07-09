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

const tag = tags(['Company']);
const companySchema = {
    name: { type: 'string', required: true },
    password: { type: 'string', required: true }
};
const logTime = () => async (ctx: any, next: any) => {
    console.log(`start: ${new Date()}`);
    await next();
    console.log(`end: ${new Date()}`);
};

@prefix('/company')
@controller('company')
export default class CompanyController {
    @request('get', '')
    @summary('Company list')
    @tag
    @get('')
    async getCompany(ctx: any, next: Next) {
        console.log('getCompany');

        // return next();
    }

    @request('POST', '/create')
    @summary('register Company')
    @description('example of api')
    @tag
    @middlewares([logTime()])
    @body(companySchema)
    async createCompany() {
    }

    @request('get', '/{id}')
    @summary('get Company by id')
    @tag
    @path({ id: { type: 'string', required: true } })
    async getOne(ctx: any) {
        const { id } = ctx.validatedParams;
        console.log('id:', id);
        const Company = { name: 'foo' };
        ctx.body = { Company };
    }

    @request('DELETE', '/{id}')
    @summary('delete Company by id')
    @tag
    @path({ id: { type: 'string', required: true } })
    async deleteOne(ctx: any) {
        const { id } = ctx.validatedParams;
        console.log('id:', id);
        ctx.body = { msg: 'success' };
    }

}


