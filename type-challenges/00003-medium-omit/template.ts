export type MyOmit<T, U extends keyof T> = {
    //重新 定义 P
    [P in keyof T as P extends U ? never : P]: T[P]
}

type IsAny<T> = 0 extends (1 & T) ? true : false

type test = IsAny<any>