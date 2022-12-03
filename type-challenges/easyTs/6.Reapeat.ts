import type { Equal, Expect } from "@type-challenges/utils";

type Repeat<T, U> = any;
type cases = [
  // @ts-expect-error
  Expect<Equal<[number, number, number], Repeat<number, 3>>>,
  // @ts-expect-error
  Expect<Equal<[string, string], Repeat<string, 2>>>,
  // @ts-expect-error
  Expect<Equal<[1], Repeat<1, 1>>>,
  // @ts-expect-error
  Expect<Equal<[], Repeat<0, 0>>>
];
