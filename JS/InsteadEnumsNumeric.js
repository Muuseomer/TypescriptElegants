"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apple1 = Fruit.APPLE;
// All numeric types can be assigned to it.
// TypeScript does not throw errors.
const apple2 = 3000;
{
    let Fruit;
    (function (Fruit) {
        Fruit["APPLE"] = "Apple";
        Fruit["PINEAPPLE"] = "Pineapple";
        Fruit["ORANGE"] = "Orange";
    })(Fruit || (Fruit = {}));
    // ✅ Only itself can be assigned to it.
    const apple1 = Fruit.APPLE;
    // ❌ Even the same string literal.
    const apple2 = 'Apple';
}
