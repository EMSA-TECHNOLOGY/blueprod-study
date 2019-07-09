export function get(path: string): MethodDecorator {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        const method = target[propertyKey];

        /* inject param decorator */
        if (method.params instanceof Map) {
            const originalMethod = descriptor.value;

            descriptor.value = (ctx: any, next: any) => {
                const newArgs: any[] = [];

                for (const [object, option] of method.params) {
                    let param: any = null;

                    switch (object) {

                        case 'header': {

                            if (option === undefined) {
                                param = ctx.headers;
                            } else {
                                param = ctx.headers[option];
                            }

                            break;
                        }

                        // TODO
                        default: {
                            break;
                        }
                    }

                    newArgs.push(param);
                }

                return originalMethod.apply(this, newArgs);
            };
        }

        descriptor.value.path = path;
        descriptor.value.action = 'get';

        return descriptor;
    };
}
