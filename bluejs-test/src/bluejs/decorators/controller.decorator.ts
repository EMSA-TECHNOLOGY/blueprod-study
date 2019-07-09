import {Constructor} from '../core';
import {Bluejs} from '../core';

export function controller(prefix: string) {
    if (!Bluejs) {
        setTimeout(function () {
            return constructor(prefix);
        }, 500);
    } else {
        return constructor(prefix);
    }
}


function constructor (prefix: string) {
    const bluejs = new Bluejs();

    return (constructor: any) => {
        const prototype = constructor.prototype;

        Object.getOwnPropertyNames(prototype).forEach((name) => {
            const fn = prototype[name];

            if (typeof fn === 'function' && typeof fn.path !== 'undefined') {
                const path: any = '/' + prefix + fn.path;

                switch (fn.action) {
                    case 'get': {
                        console.info('Bind route: ' + fn.action + ' ' + path + ' for action: ' + [constructor.name, fn.name].join('.'));
                        bluejs.router.get(path, fn);
                        break;
                    }

                    // TODO

                    default: {
                        console.error('Invalid route: ' + path);
                        break;
                    }
                }
            }
        });
    };
}
