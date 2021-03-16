const Ajv = require('ajv').default;
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' },
  },
  required: ['foo'],
  additionalProperties: false,
};

const validate = ajv.compile(schema);

const validData = {
  foo: 1,
  bar: 'abc',
};

const valid = validate(validData);
console.log(validate);
if (!valid) console.log(validate.errors);
