import template from 'lodash/string/template';

export let types = [
  'margin',
  'padding',
  'border-style'
];

export default function TRBL(decl, trbl = ['top', 'right', 'bottom', 'left'], pattern = '${prop}-${trbl}: ${value}') {

  let values = decl.value.split(' ');
  let output = template(pattern);
  let prop   = decl.prop;

  for (let i = 0; i < values.length; ++i) {

    if (values[i] === 'null') {
      continue;
    }
    else if (values[(i + 2) % 4] === undefined) {

      // Adjacent value index
      let j = (i + 2) % 4;

      decl.parent.insertBefore(decl, output({ prop, trbl: trbl[i], value: values[i]  }));
      decl.parent.insertBefore(decl, output({ prop, trbl: trbl[j], value: values[i]  }));
    }
    else {
      decl.parent.insertBefore(decl, output({ prop, trbl: trbl[i], value: values[i]  }));
    }

  }

  decl.remove();

}
