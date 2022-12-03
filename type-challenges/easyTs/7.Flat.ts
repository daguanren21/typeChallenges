import type { Equal, Expect } from "@type-challenges/utils";

type Flat<T extends any[],F extends any[]=[]>= T extends [infer L,...infer R] ?
[...L extends any[]?Flat<L,[...F,L]>:[L],...Flat<R>]
:[]
type cases = [
  Expect<Equal<[1, 2, 3], Flat<[1, 2, 3]>>>,
  Expect<Equal<[1, 2, 3,4,5,6], Flat<[[[[[[[1]]]]]], [2, 3], [4, [5, [6]]]]>>>,
  Expect<Equal<[], Flat<[]>>>
];

//1，取出数组的第一项，然后判断这个第一项是否为数组 递归Flat, [L] 
//2.把右边的数据也同时进行Flat