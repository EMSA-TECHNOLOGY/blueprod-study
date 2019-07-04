import {Bluejs} from "../"

export default function controller(prefix: string) {
    const bluejs = new Bluejs();

    return function (constructor: Function) {
        const prototype = constructor.prototype;

        Object.getOwnPropertyNames(prototype).forEach(function (name) {
            const fn = prototype[name];

            if (typeof fn === "function" && typeof fn.path !== "undefined") {
                const path: any = '/' + prefix + fn.path;

                switch (fn.action) {
                    case 'get': {
                        console.info('Bind route: ' + path + ' for controller: ' + constructor.name);
                        bluejs.router.get(path, name);
                        break
                    }

                    default: {
                        console.error('Invalid route: ' + path);
                        break;
                    }
                }
            }
        });
    }
}
