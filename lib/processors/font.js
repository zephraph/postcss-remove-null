import stripNulls from '../strip-nulls';

export default function font(decl) {

  const SLASH_NULL = /\s*\/\s*null/;
  const NULL_SLASH_NULL = /null\s*\/\s*null/;
  const NULL_SLASH_VALUE = /null\s*\/\s*([0-9A-z.]*)/;

  if (decl.prop !== 'font') {
    return false;
  }

  decl.value = decl.value.replace(NULL_SLASH_NULL, '');
  decl.value = decl.value.replace(SLASH_NULL, '');

  let nullSlashMatch = decl.value.match(NULL_SLASH_VALUE);

  if (nullSlashMatch) {
    let [match, lineHeight] = nullSlashMatch;
    decl.value = decl.value.replace(match, '');
    decl.parent.insertAfter(decl, `line-height:${lineHeight}`);
  }

  stripNulls(decl);
  return true;

}
