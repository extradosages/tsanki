
# tsanki

tsanki is a TypeScript library designed for compile-time unit tests for TypeScript types. It provides a robust testing framework to ensure your types behave as expected during compilation.

## Features

- Compile-time unit tests for TypeScript types.
- Integration with standard TypeScript tooling.
- Lightweight and easy to integrate into existing projects.

## Installation

To install tsanki, use the following command:

```bash
npm install tsanki
```

## Usage

The `tsanki` library offers a suite of utilities to assert relationships between TypeScript types at compile time. Here's how you can use it to write effective type tests:

1. **Import the library**: Start by importing the necessary functions from tsanki.

   ```typescript
   import {
       expect,
       ToBeEquivalentTo,
       ToBeNarrowerThan,
       ToBeStrictlyNarrowerThan,
       ToBeAnythingWithRespectTo,
       ToBeIncomparableTo,
   } from 'tsanki';
   ```

2. **Writing Tests**: Use the `expect` function along with the test conditions provided by tsanki to assert different type relationships:

   - **ToBeEquivalentTo**: Asserts that two types are equivalent.

     ```typescript
     expect<{ a: 1 }, ToBeEquivalentTo, { a: 1 }>;
     ```

   - **ToBeStrictlyNarrowerThan**: Asserts that one type is strictly narrower than another.

     ```typescript
     expect<{ a: 1 }, ToBeStrictlyNarrowerThan, { a: number }>;
     ```

   - **ToBeNarrowerThan**: Asserts that one type is narrower than or equivalent to another.

     ```typescript
     expect<{ a: 1 }, ToBeNarrowerThan, { a: number }>;
     ```

   - **ToBeAnythingWithRespectTo**: Asserts no specific relationship (broad compatibility).

     ```typescript
     expect<{ a: 1 }, ToBeAnythingWithRespectTo, { a: number }>;
     ```

   - **ToBeIncomparableTo**: Asserts that two types are incomparable.

     ```typescript
     expect<{ a: 1 }, ToBeIncomparableTo, { a: string }>;
     ```

3. **Run the Tests**: Execute the TypeScript compiler to run the tests. If the type relationships are not as asserted, the compiler will emit errors.

4. **Interpret the Results**: If there are no compiler errors, your type assertions have passed. If there are errors, you'll need to examine them to understand the type mismatches.

## Documentation

For more detailed documentation, visit the [GitHub repository](https://github.com/extradosages/tsanki).

## Contributing

Contributions are welcome! Please refer to the repository's issues page to propose new features or report bugs.

## License

tsanki is [MIT licensed](LICENSE).

## Contact

If you have any questions or feedback, please contact extradosages at extradosages.001@gmail.com.
