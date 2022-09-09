// 👎 Bad

declare function getName(x: unknown): unknown;
declare function getName(x: string): string;
declare function getName(x: number): number;

// ❌ str is unknown not string
const str = getName('11');
// ❌ num is unknown not number
const num = getName(11);

export {};


// 👍 Good

declare function getName(x: string): string;
declare function getName(x: number): number;
declare function getName(x: unknown): unknown;

// ✅ str is string
const str = getName('11');
// ✅ num is number
const num = getName(11);

export {};