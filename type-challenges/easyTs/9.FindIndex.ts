import type { Equal, Expect } from "@type-challenges/utils";

export type FindIndex<T extends any[], U, F extends any[] = []> = T extends [
  infer L,
  ...infer R
]
  ? Equal<L, U> extends true
    ? F["length"]
    : FindIndex<R, U, [...F, L]>
  : never;
type arr = [any, never, 1, "2", true];
type cases = [
  Expect<Equal<2, FindIndex<arr, 1>>>,
  Expect<Equal<never, FindIndex<arr, 3>>>
];

type test = FindIndex<arr, 1>;
// 递归比较相等 我们得出此时的index 就是我们对应数据的索引值 [any,never]
