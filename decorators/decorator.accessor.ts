/*
* Accessor Decorator
*
*   - used to observe, modify, or replace an accessor’s definitions
*/

export function AccessorDecorator() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('AccessorDecorator invoked!');
  };
}
