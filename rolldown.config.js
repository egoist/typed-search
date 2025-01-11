import { defineConfig } from "rolldown"
import IsolatedDecl from "unplugin-isolated-decl/rolldown"

export default defineConfig({
  input: "src/index.ts",
  output: {
    format: "esm",
    dir: "dist",
  },
  plugins: [IsolatedDecl()],
})
