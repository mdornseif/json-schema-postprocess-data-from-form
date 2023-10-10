/*
 * postprocess.ts
 *
 * Created by Dr. Maximillian Dornseif 2023-10-10 in json-schema-remove-readonly-from-data 1.0.5
 * Copyright (c) 2023 HUDORA GmbH
 */

import { JSONSchema7 } from 'json-schema'
import traverse from 'json-schema-traverse'
import unset from 'lodash.unset'

/** remove al date belonging to readOnly Fields using a JSON-Schema.
 *
 * Defaults are applied and empty strings and arrays are added where needed.
 * `null` values are removed so they are `undefined`.
 **/
export function removeReadonly(schema: JSONSchema7, data: any): unknown {
  const newData: any = structuredClone(data)

  function callback(
    sch: JSONSchema7,
    jsonPtr: string,
    _root: any,
    parentJsonPtr: string | undefined,
    _parentKeyword: any,
    _parentSchema: any,
    _indexProperty: any
  ): void {
    if (sch?.readOnly) {
      // um Nesting korrekt abzubilden müssten wir jsonPtr auseindander pflücken
      const accessor = jsonPtr.replace(/\/properties\//g, '.').replace(/^\./, '')
      unset(newData, accessor)
    }
  }
  traverse(schema, {}, callback)
  return newData
}
