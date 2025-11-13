// scripts/validate-tokens.js
const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');

const schemaPath = path.join(__dirname, '..', 'tokens', 'tokens.schema.json');
const tokensPath = path.join(__dirname, '..', 'tokens', 'tokens.json');

if (!fs.existsSync(schemaPath)) {
  console.error('Schema not found at', schemaPath);
  process.exit(1);
}
if (!fs.existsSync(tokensPath)) {
  console.error('Tokens file not found at', tokensPath);
  process.exit(1);
}

const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);
const valid = validate(tokens);

if (!valid) {
  console.error('Tokens validation failed. Errors:');
  validate.errors.forEach(err => {
    console.error('-', err.instancePath || '(root)', err.message);
  });
  process.exit(1);
}

console.log('✔ tokens/tokens.json validated against tokens/tokens.schema.json');