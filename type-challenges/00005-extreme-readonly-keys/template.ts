import { Equal } from '@type-challenges/utils';
export type GetReadonlyKeys<T> = keyof {
    [K in keyof T as Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? K : never]: T[K]
}

//第一步：把 类型都变为Readonly Readonly<Pick<T, K>>
//第二步：原有和变为readonly的进行比较，相同的为真，为真留下 否则剔除
