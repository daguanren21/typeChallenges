import { MyPick } from "./../00004-easy-pick/template";
import { Equal } from "@type-challenges/utils";
export type GetReadonlyKeys<T> = keyof {
  [K in keyof T as Equal<MyPick<T, K>, Readonly<MyPick<T, K>>> extends true
    ? K
    : never]: T[K];
};
