// 👎 Bad

declare function getName(first: string): string;
declare function getName(first: string, second: string): string;

// ❌ Argument of type 'undefined' is not assignable to parameter of type 'string'
// 💡 If y// 👎 Bad

declare function getName(first: string): string;
declare function getName(first: string, second: string): string;

// ❌ Argument of type 'undefined' is not assignable to parameter of type 'string'
// 💡 If you open StackBlitz separately, you can edit `tsconfig.json` to add the `"strict": true` compile option, and you can see the error after saving.
getName('1', undefined);

function main(callback: (a: string, b: number) => void) {}

// ❌ TypeScript does not throw errors
main(getName);

export {};ou open StackBlitz separately, you can edit `tsconfig.json` to add the `"strict": true` compile option, and you can see the error after saving.
getName('1', undefined);

function main(callback: (a: string, b: number) => void) {}

// ❌ TypeScript does not throw errors
main(getName);

export {};


// 👍 Good

declare function getName(first: string, second?: string): string;

// ✅
getName('1', undefined);

function main(callback: (a: string, b: number) => void) {}

// ✅ TypeScript throws error because `b` is of type number
main(getName);

export {};
