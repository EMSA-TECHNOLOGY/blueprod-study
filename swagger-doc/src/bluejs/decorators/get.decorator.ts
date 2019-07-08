export function get(path: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        target[propertyKey].path = path;
        target[propertyKey].action = 'get';

        return descriptor;
    };
}
