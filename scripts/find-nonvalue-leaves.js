const fs = require('fs');
const tokens = JSON.parse(fs.readFileSync('tokens/tokens.json', 'utf8'));

function walk(obj, path=[]) {
  if (typeof obj !== 'object' || obj === null) return;
  const keys = Object.keys(obj);
  const hasValue = keys.includes('value');
  // If it's an object with more than 0 keys and doesn't have a 'value' and is not a meta container, inspect deeper:
  if (hasValue) return;
  // If all children are objects, recurse; otherwise report this node as suspect
  const allChildrenAreObjects = keys.length && keys.every(k => typeof obj[k] === 'object');
  if (!allChildrenAreObjects) {
    console.log('Suspect token (leaf without "value") at:', path.join('.'));
    return;
  }
  for (const k of keys) walk(obj[k], path.concat(k));
}
walk(tokens);