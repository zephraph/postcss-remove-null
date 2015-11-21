import requireDirectory from 'require-directory';
import forEach from 'lodash/collection/forEach';
import contains from 'lodash/collection/contains';

let processors = requireDirectory(module);

export function process(css) {

    css.walkDecls( decl => {

        if (contains(decl.value, 'null')) {

            forEach(processors, process => {
                if (process.default(decl)) { return false; }
            });

        }

    });

}
