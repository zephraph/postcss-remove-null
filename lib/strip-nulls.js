import { list } from 'postcss';
import without from 'lodash/array/without';

export default function stripNull(decl) {
  decl.value = without(list.space(decl.value), 'null').join(' ');
}
