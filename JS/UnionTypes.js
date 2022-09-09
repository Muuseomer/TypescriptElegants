"use strict";
// 👎 Bad
Object.defineProperty(exports, "__esModule", { value: true });
function main(x) {
    // ❌ No overload matches this call
    return getName(x);
    // 🙅 The following code works but is redundant
    // if (typeof x === "number") {
    //   return getName(x)
    // } else {
    //   return getName(x)
    // }
}
function main(x) {
    // ✅
    return getName(x);
}
