import type { Equal, Expect } from "@type-challenges/utils";

//约束我们传参的类型
type LengthofTuple<T extends any[]> = T['length']
type cases = [
  Expect<Equal<3, LengthofTuple<["A", "B", "C"]>>>,
  Expect<Equal<0, LengthofTuple<[]>>>
];

type test = LengthofTuple<["A", "B", "C"]>