/*
* Class Decorator
*
*   - applied for class
*   - called when the class is declared (not when a new instance is instantiated)
*
*/

export function ClassDecorator(constructor: Function) {
  console.log('ClassDecorator invoked!');
}
