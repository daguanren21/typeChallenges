import type { Equal, Expect } from "@type-challenges/utils";

type LastItem<T extends any[]> = T extends [...infer L, infer R]
  ? R
  : undefined;
//T[T["length"]-1]
type cases = [
  Expect<Equal<"E", LastItem<["B", "F", "E"]>>>,
  Expect<Equal<boolean, LastItem<[string, number, boolean]>>>,
  Expect<Equal<undefined, LastItem<[]>>>
];
