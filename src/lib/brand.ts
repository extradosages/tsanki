const BRAND: unique symbol = Symbol("tsanki");
export type Branded<T> = T & { [BRAND]: {} };
