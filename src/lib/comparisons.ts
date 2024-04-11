import { Branded } from "./brand";

export type ToBeEquivalentTo = Branded<{ EquivalentTo: {} }>;

export type ToBe = ToBeEquivalentTo;

export type ToBeStrictlyNarrowerThan = Branded<{ StrictlyNarrowerThan: {} }>;

export type ToBeNarrowerThan = ToBeStrictlyNarrowerThan & ToBeEquivalentTo;

export type ToBeStrictlyWiderThan = Branded<{ StrictlyWiderThan: {} }>;

export type ToBeWiderThan = ToBeStrictlyWiderThan & ToBeEquivalentTo;

export type ToBeIncomparableTo = Branded<{ IncomparableTo: {} }>;

export type ToBeAnythingWithRespectTo = ToBeEquivalentTo &
    ToBeStrictlyNarrowerThan &
    ToBeStrictlyWiderThan &
    ToBeIncomparableTo;

export type Comparison =
    | ToBeEquivalentTo
    | ToBeStrictlyNarrowerThan
    | ToBeStrictlyWiderThan
    | ToBeIncomparableTo;

export type Not<T extends Comparison> = Exclude<Comparison, T>;
