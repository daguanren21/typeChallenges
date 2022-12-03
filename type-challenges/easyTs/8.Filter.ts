import type { Equal, Expect } from "@type-challenges/utils";


type Filter<T extends any[],U,F extends any[]=[]>= T extends [infer L ,...infer R] ? [L] extends [U] ?Filter<R,U,[...F,L]> :Filter<R,U,[...F]>:F
type cases = [
  Expect<Equal<[1, 2], Filter<[1, "BFE", 2, true, "dev"], number>>>,
  Expect<Equal<["BFE", "dev"], Filter<[1, "BFE", 2, true, "dev"], string>>>,
  Expect<Equal<["BFE", any, "dev"], Filter<[1, "BFE", 2, any, "dev"], string>>>
];

