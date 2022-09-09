"use strict";
// 👎 Bad
Object.defineProperty(exports, "__esModule", { value: true });
// ❌ str is unknown not string
const str = getName('11');
// ❌ num is unknown not number
const num = getName(11);
// ✅ str is string
const str = getName('11');
// ✅ num is number
const num = getName(11);
