import requireDirectory from 'require-directory';
import contains from 'lodash/collection/contains';

let processors = requireDirectory(module);
let types = Object.keys(processors);

export function process(css) {

  css.walkDecls( decl => {

    if (contains(decl.value, 'null')) {

      if (contains(types, decl.prop)) {
        processors[decl.prop].default(decl);
      }
      else {
        processors.default.default(decl);
      }

    }

  });

}
