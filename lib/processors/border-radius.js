import TRBL from './trbl';

export default function borderRadius(decl) {
  TRBL(decl, [
    'top-left',
    'top-right',
    'bottom-right',
    'bottom-left'
  ], 'border-${trbl}-radius: ${value}');
}
