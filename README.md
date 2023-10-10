[![NPM License](https://img.shields.io/npm/l/json-schema-remove-readonly-from-data)](https://www.npmjs.com/package/json-schema-remove-readonly-from-data)
[![NPM Version](https://img.shields.io/npm/v/json-schema-remove-readonly-from-data)](https://www.npmjs.com/package/json-schema-remove-readonly-from-data)
[![Last Commit](https://img.shields.io/github/last-commit/mdornseif/json-schema-remove-readonly-from-data)](https://github.com/mdornseif/json-schema-remove-readonly-from-data)

# json-schema-remove-readonly-from-data

Removes `readOnly` fields from data as defined by a json-schema. Often needed before sending Data to the Server.

Uses information from a [JSON-Schema](https://json-schema.org) to process the data.

```py
    >>> SCHEMA = { 'type': 'object',
    ...            'properties': {
    ...                'ro': {'type': 'string', 'readOnly': True},
    ...                'rw': {'type': 'boolean'}}}
    >>> removeReadonly(SCHEMA, {rw: 'TST10001', ro: true})
    {
      "rw": "TST10001"
    }
```

# See also:

- [json-schema-prepare-data-for-form](https://www.npmjs.com/package/json-schema-prepare-data-for-form)
- [json-schema-empty-array](https://www.npmjs.com/package/json-schema-empty-array)
- [json-schema-empty-strings](https://www.npmjs.com/package/json-schema-empty-strings)
- [json-schema-default](https://www.npmjs.com/package/json-schema-default)
- [react-json-schema-form](https://github.com/rjsf-team/react-jsonschema-form)
- [graphql-clean-diff](https://www.npmjs.com/package/graphql-clean-diff)
