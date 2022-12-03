import type { Equal, Expect } from "@type-challenges/utils";


type ReverseTuple<T extends any [],F extends any[]=[]>=T extends [...infer L,infer R]?ReverseTuple<L,[...F,R]>:F
type cases = [
  Expect<Equal<[boolean, number,string], ReverseTuple<[string, number, boolean]>>>,
  Expect<Equal<[3,2,1], ReverseTuple<[1,2,3]>>>,
  Expect<Equal<[], ReverseTuple<[]>>>
];
