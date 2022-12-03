import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  // @ts-expect-error
   Expect<Equal<[any,never,1] , Slice<[any, never, 1, "2", true, boolean], 0, 2>>>,
  // @ts-expect-error
   Expect<Equal<[never,1,'2'] , Slice<[any, never, 1, "2", true, boolean], 1, 3>>>,
   // @ts-expect-error
   Expect<Equal<[1,'2',true,boolean]  , Slice<[any, never, 1, "2", true, boolean], 2>>>,
    // @ts-expect-error
   Expect<Equal<[] , Slice<[], 0>>>,
];
