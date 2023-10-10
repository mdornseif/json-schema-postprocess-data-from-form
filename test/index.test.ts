/*
 * index.test.ts
 *
 * Created by Dr. Maximillian Dornseif 2023-10-10 in json-schema-remove-readonly-from-data 1.0.5
 * Copyright (c) 2023 HUDORA GmbH
 */

import { JSONSchema7 } from 'json-schema'

import { removeReadonly } from '../src/index'
import { expect, test, describe } from 'vitest'

const TESTENTITY = {
  designator: 'TST10001',
  ist_aktiv: true,
  sprachen: ['Spanisch'],
  nested: { ro: false, foo: 'bar' },
}
const TESTSCHEMA: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    designator: {
      type: 'string',
      readOnly: true,
    },
    ist_aktiv: {
      type: 'boolean',
    },
    nested: {
      type: 'object',
      properties: {
        ro: {
          type: 'string',
          readOnly: true,
        },
      },
    },
  },
}

describe('removeReadonly', () => {
  test('example', () => {
    const entity = {
      rw: 'TST10001',
      ro: true,
    }
    const schema: JSONSchema7 = {
      type: 'object',
      properties: {
        ro: {
          type: 'string',
          readOnly: true,
        },
        rw: {
          type: 'boolean',
        },
      },
    }

    const cleaned = removeReadonly(schema, entity)
    expect(cleaned).toMatchInlineSnapshot(`
    {
      "rw": "TST10001",
    }
  `)
  })
  test('removeReadonly', () => {
    const m6 = removeReadonly(TESTSCHEMA, TESTENTITY)
    expect(m6).toMatchInlineSnapshot(`
    {
      "ist_aktiv": true,
      "nested": {
        "foo": "bar",
      },
      "sprachen": [
        "Spanisch",
      ],
    }
  `)
  })
})
