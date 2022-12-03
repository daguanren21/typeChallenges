import type { Equal, Expect } from "@type-challenges/utils";

type Push<T extends any[], U> = [...T, U];
type cases = [
  Expect<Equal<[1, 2, 3, 4], Push<[1, 2, 3], 4>>>,
  Expect<Equal<[1, 2], Push<[1], 2>>>
];
