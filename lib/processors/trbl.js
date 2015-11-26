export let types = [
  'margin',
  'padding',
  'border-style'
];

export default function TRBL(decl) {

  let values = decl.value.split(' ');
  let trbl = ['top', 'right', 'bottom', 'left'];

  for (let i = 0; i < values.length; ++i) {

    if (values[i] === 'null') {
      continue;
    }
    else if (values[(i + 2) % 4] === undefined) {

      // Adjacent value index
      let j = (i + 2) % 4;

      decl.parent.insertBefore(decl, `${decl.prop}-${trbl[i]}: ${values[i]};`);
      decl.parent.insertBefore(decl, `${decl.prop}-${trbl[j]}: ${values[i]};`);
    }
    else {
      decl.parent.insertBefore(decl, `${decl.prop}-${trbl[i]}: ${values[i]};`);
    }

  }

  decl.remove();

}
