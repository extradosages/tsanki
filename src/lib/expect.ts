import { Compare } from "./compare";

export declare function expect<
    Actual,
    Comparison extends Compare<Actual, Expected>,
    Expected,
>(): never;
