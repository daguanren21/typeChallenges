import type { Equal, Expect } from "@type-challenges/utils";
import { FindIndex } from "./9.FindIndex";


type TupleToEnum<T extends any[],U extends boolean =false>={
  +readonly [K in T[number]]:U extends true?FindIndex<T,K>:K
}
type cases = [
  Expect<Equal<{ readonly MacOS: "MacOS", readonly Windows: "Windows", readonly Linux: "Linux" }, TupleToEnum<["MacOS", "Windows", "Linux"]>>>,
  Expect<Equal<{ readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }, TupleToEnum<["MacOS", "Windows", "Linux"], true>>>,
];
