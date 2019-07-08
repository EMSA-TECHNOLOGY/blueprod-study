
export default function get(path: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        target[propertyKey].path = path;
        target[propertyKey].action = 'get';
    };
}
