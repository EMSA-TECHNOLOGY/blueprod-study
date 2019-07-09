import {controller, get, header} from '../../bluejs/decorators';

@controller('user')
export default class UserController {

    @get('')
    async getUser(@header('accept') contentType: string) {
        console.log(contentType);
    }
}
