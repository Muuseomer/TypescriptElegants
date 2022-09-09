"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // 👎 Bad
    const main = (callback) => {
        const returnValue = callback();
        // TypeScript does not throw errors
        returnValue.get();
    };
}
{
    // 👍 Good
    const main = (callback) => {
        const returnValue = callback();
        // ❌ Property 'get' does not exist on type 'void'
        returnValue.get();
    };
}
