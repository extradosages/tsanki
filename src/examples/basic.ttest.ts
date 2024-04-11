import {
    ToBeAnythingWithRespectTo,
    ToBeEquivalentTo,
    ToBeIncomparableTo,
    ToBeNarrowerThan,
    ToBeStrictlyNarrowerThan,
    expect,
} from "../lib";

expect<{ a: 1 }, ToBeEquivalentTo, { a: 1 }>;

expect<{ a: 1 }, ToBeStrictlyNarrowerThan, { a: number }>;

expect<{ a: 1 }, ToBeNarrowerThan, { a: number }>;

expect<{ a: 1 }, ToBeAnythingWithRespectTo, { a: number }>;

expect<{ a: 1 }, ToBeAnythingWithRespectTo, { a: string }>;

expect<{ a: 1 }, ToBeIncomparableTo, { a: string }>;
