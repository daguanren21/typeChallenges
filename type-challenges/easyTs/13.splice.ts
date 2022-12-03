import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  // @ts-expect-error
   Expect<Equal<[boolean,null,undefined,never], Splice<[string, number, boolean, null, undefined, never], 0, 2>>>,
  // @ts-expect-error
   Expect<Equal<[string,undefined,never], Splice<[string, number, boolean, null, undefined, never], 1, 3>>>,
   // @ts-expect-error
   Expect<Equal<[string,1,2,3,null,undefined,never],Splice<
   [string, number, boolean, null, undefined, never],
   1,
   2,
   [1, 2, 3]
 >>>,
];
