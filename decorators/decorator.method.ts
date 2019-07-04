/*
* Method Decorator
*
*   - used to observe, modify, or replace a method definition
*/

/* Decorator Factories */
export function MethodDecorator(): MethodDecorator {
  return (constructor: Function, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log('MethodDecorator invoked!');
    descriptor.enumerable = true;
  };
}
