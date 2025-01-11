import { expect, test } from "bun:test"
import { typedSearch } from "."

test("main", () => {
  expect(
    typedSearch("a=1&b=2&c=3", { a: "string", b: "number", c: "boolean" })
  ).toEqual({ a: "1", b: 2, c: true })

  expect(typedSearch("a=1&a=2&a=hi", { a: "string[]" })).toEqual({
    a: ["1", "2", "hi"],
  })

  expect(typedSearch("a=1&a=2&a=hi", { a: "number[]" })).toEqual({
    a: [1, 2],
  })
})
