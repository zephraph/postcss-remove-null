export default [
  {
    message:  'should ignore non-null values',
    fixture:  'a{margin-right: auto; margin-left: auto; height: 32px;}',
    expected: 'a{margin-right: auto; margin-left: auto; height: 32px;}'
  },
  {
    message:  'should remove a null declarations',
    fixture:  'a{margin-right: null; margin-left: null;}',
    expected: 'a{}'
  }
];
