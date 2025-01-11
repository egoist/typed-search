# typed-search

Super simple type-safe URLSearchParams parser.

```bash
npm i typed-search
```

## Usage

```ts
import { typedSearch } from "typed-search"

const query = typedSearch("a=1&b=2&c=3", {
  a: "string",
  b: "number",
  c: "boolean",
})

console.log(query)
// { a: "1", b: 2, c: true }
```

### Supported types

- `string`
- `number`
- `boolean`
- `string[]`
- `number[]`

## License

MIT.
