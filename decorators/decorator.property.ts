/*
* Property Decorator
*
*/

export function PropertyDecorator(): PropertyDecorator {
  return (constructor: Function, propertyKey: string) => {
    console.log('PropertyDecorator invoked!');
  };
}
