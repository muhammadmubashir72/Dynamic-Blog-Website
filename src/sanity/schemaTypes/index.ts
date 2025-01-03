import { type SchemaTypeDefinition } from 'sanity'
import {Blog} from "./blogSchema"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Blog],
}
