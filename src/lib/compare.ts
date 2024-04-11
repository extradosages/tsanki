import {
    ToBeEquivalentTo,
    ToBeIncomparableTo,
    ToBeStrictlyNarrowerThan,
    ToBeStrictlyWiderThan,
} from "./comparisons";

export type Compare<Actual, Expected> = Actual extends Expected
    ? Expected extends Actual
        ? ToBeEquivalentTo
        : ToBeStrictlyNarrowerThan
    : Expected extends Actual
      ? ToBeStrictlyWiderThan
      : ToBeIncomparableTo;
