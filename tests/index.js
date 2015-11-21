import test from 'tape';
import postcss from 'postcss';
import plugin from '..';
import { name } from '../package.json';
import requireDir from 'require-directory';
import forEach from 'lodash/collection/forEach';

let suites = requireDir(module);
let tests = [];

forEach(suites, (test, suite) => {
  tests = tests.concat(test.default.filter( test => test.message = `${suite}: ${test.message}`));
});

function process (css, options) {
  return postcss(plugin(options)).process(css).css;
}

test(name, t => {
  t.plan(tests.length);

  tests.forEach(test => {
    var options = test.options || {};
    t.equal(process(test.fixture, options), test.expected, test.message);
  });
});

test('should use the postcss plugin api', t => {
  t.plan(2);
  t.ok(plugin().postcssVersion, 'should be able to access version');
  t.equal(plugin().postcssPlugin, name, 'should be able to access name');
});
