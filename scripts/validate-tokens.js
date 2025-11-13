const Ajv = require('ajv');
const fs = require('fs');
const ajv = new Ajv({ allErrors: true });
const schema = JSON.parse(fs.readFileSync('tokens/tokens.schema.json'));
const tokens = JSON.parse(fs.readFileSync('tokens/tokens.json'));
const validate = ajv.compile(schema);
const valid = validate(tokens);
if (!valid) {
  console.error('Tokens validation errors:', validate.errors);
  process.exit(1);
} else {
  console.log('Tokens validated successfully');
}