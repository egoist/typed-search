export function typedSearch<
  T extends Record<
    string,
    "string" | "string[]" | "number" | "number[]" | "boolean"
  >,
  K extends keyof T
>(_params: URLSearchParams | string, schema: T) {
  const params =
    typeof _params === "string" ? new URLSearchParams(_params) : _params

  const query: Record<string, any> = {}

  for (const key of params.keys()) {
    const values = params.getAll(key)
    if (values.length === 0) continue

    const t = schema[key as K]

    if (t === "string") {
      query[key] = values[0]
    } else if (t === "number") {
      const value = Number(values[0])
      if (!isNaN(value)) {
        query[key] = Number(values[0])
      }
    } else if (t === "boolean") {
      query[key] = values[0] !== "false"
    } else if (t === "string[]") {
      query[key] = values
    } else if (t === "number[]") {
      query[key] = values.map(Number).filter((v) => !isNaN(v))
    }
  }

  return query as {
    [k in K]?: T[k] extends "string"
      ? string
      : T[k] extends "string[]"
      ? string[]
      : T[k] extends "number"
      ? number
      : T[k] extends "number[]"
      ? number[]
      : boolean
  }
}
