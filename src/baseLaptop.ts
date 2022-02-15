import Laptop from "./laptop";
import * as Keyboard from "./keyboard";
import { b } from "./keyboard";

abstract class BaseLaptop<T> implements Laptop<T>  {
    name: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;

    constructor(
        name: string,
        type: T,
        numeric: boolean,
        touchButton: boolean) {

        this.name = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touchButton;
    }

    a(): void {
        console.log(Keyboard.a());
    }
    b(): void {
        console.log(b());
    }
}

export default BaseLaptop;