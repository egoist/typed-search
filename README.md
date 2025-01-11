# typed-search

Super simple type-safe URLSearchParams parser.

```bash
npm i typed-search
```

## Usage

```ts
import { typedSearch } from "typed-search"

const query = typedSearch("a=1&b=2&c=3&arr=1&arr=2", {
  a: "string",
  b: "number",
  c: "boolean",
  arr: "number[]",
})

console.log(query)
// { a: "1", b: 2, c: true, arr: [1, 2] }
```

### Supported types

- `string`
- `number`
- `boolean`
- `string[]`
- `number[]`

## License

MIT.
