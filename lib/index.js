import postcss from 'postcss';
import { process } from './processors';

export default postcss
  .plugin('postcss-remove-null', function(opts = {}) {

      return (css, result) => {
          process(css);
      };

  });
