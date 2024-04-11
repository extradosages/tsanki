const BRAND: unique symbol = Symbol("type-test");
export type Branded<T> = T & { [BRAND]: {} };
