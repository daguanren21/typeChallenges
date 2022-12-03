import type { Equal, Expect } from "@type-challenges/utils";

// type FirstItem<T extends any[]>=T[0]
type FirstItem<T extends any[]> = T extends [infer L, ...infer R]
  ? L
  : undefined;
type cases = [
  Expect<Equal<string, FirstItem<[string, number, boolean]>>>,
  Expect<Equal<"B", FirstItem<["B", "F", "E"]>>>,
  Expect<Equal<undefined, FirstItem<[]>>>
];
