import type { Equal, Expect } from "@type-challenges/utils";

type Shift<T extends any[]> = T extends [infer L, ...infer R] ? R : [];
type cases = [
  Expect<Equal<[2, 3], Shift<[1, 2, 3]>>>,
  Expect<Equal<[], Shift<[1]>>>,
  Expect<Equal<[], Shift<[]>>>
];
