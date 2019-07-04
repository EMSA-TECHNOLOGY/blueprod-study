import {ClassDecorator} from './decorator.class';
import {MethodDecorator} from './decorator.method';
import {AccessorDecorator} from './decorator.accessor';
import {PropertyDecorator} from './decorator.property';
import {ParameterDecorator, ParameterDecoratorWithParam} from "./decorator.param";


@ClassDecorator
export default class User {

  @PropertyDecorator()
  firstName: string;
  lastName: string;

  constructor() {
    this.firstName = 'Vu';
    this.lastName = 'Do';
  }

  @MethodDecorator()
  getName() {
    return `${this.firstName} ${this.lastName}`;
  }

  setName(@ParameterDecorator firstName: string, @ParameterDecoratorWithParam('Do') lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @AccessorDecorator()
  get getFirstName() {
    return this.firstName;
  }
}

const user = new User();
const name = user.getName();
console.log(`Hello everybody! My name is ${name}.`);
