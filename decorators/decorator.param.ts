/*
* Parameter Decorator
*
*   - applied to the function for a class constructor or method declaration
*/

export function ParameterDecorator(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  console.log('ParameterDecorator invoked!');
}

export function ParameterDecoratorWithParam(value: string): ParameterDecorator {
  console.log('ParameterDecoratorWithParam factory invoked!');

  return (constructor: Function, propertyKey: string | symbol, parameterIndex: number) => {
    console.log('ParameterDecoratorWithParam invoked!');
  };
}
