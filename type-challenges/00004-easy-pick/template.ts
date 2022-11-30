export type MyPick<T, U extends keyof T> = {
    // [P in keyof T as P extends U ? P : never]: T[P]
    [K in U]: T[K]
}
