// 👎 Bad

declare function getName(x: string): string;
declare function getName(x: number): string;

function main(x: number | string) {
  // ❌ No overload matches this call
  return getName(x);

  // 🙅 The following code works but is redundant
  // if (typeof x === "number") {
  //   return getName(x)
  // } else {
  //   return getName(x)
  // }
}

// 👍 Good

declare function getName(x: string | number): string;

function main(x: number | string) {
  // ✅
  return getName(x);
}

export {};

