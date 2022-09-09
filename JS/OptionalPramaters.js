"use strict";
// 👎 Bad
Object.defineProperty(exports, "__esModule", { value: true });
// ❌ Argument of type 'undefined' is not assignable to parameter of type 'string'
// 💡 If you open StackBlitz separately, you can edit `tsconfig.json` to add the `"strict": true` compile option, and you can see the error after saving.
getName('1', undefined);
function main(callback) { }
// ❌ TypeScript does not throw errors
main(getName);
ou;
open;
StackBlitz;
separately, you;
can;
edit `tsconfig.json`;
to;
add;
the `"strict": true`;
compile;
option, and;
you;
can;
see;
the;
error;
after;
saving.
    getName('1', undefined);
function main(callback) { }
// ❌ TypeScript does not throw errors
main(getName);
// ✅
getName('1', undefined);
function main(callback) { }
// ✅ TypeScript throws error because `b` is of type number
main(getName);
