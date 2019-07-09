export function header(pName: string): ParameterDecorator {

    return function headerDecorator(target: any, propertyKey: string, parameterIndex: number) {
        const method = target[propertyKey];

        method.params = method.params || new Map();
        method.params.set('header', pName);
    };
}
