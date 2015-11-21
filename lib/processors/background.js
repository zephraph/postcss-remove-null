import stripNulls from '../strip-nulls';

export default function background(decl) {

  const NULL_URL = /url\(\s*null\s*\)/;

  if (decl.prop !== 'background') {
    return false;
  }

  decl.value = decl.value.replace(NULL_URL,'');

  stripNulls(decl);

  return true;
}
