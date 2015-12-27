export default [
  {
    message:  'should break out top-right and bottom-left if first param null',
    fixture:  'a{border-radius:null 1px}',
    expected: 'a{border-top-right-radius: 1px;border-bottom-left-radius: 1px}'
  },
  {
    message:  'should break out top-left and bottom-right if second param null',
    fixture:  'a{border-radius:1px null}',
    expected: 'a{border-top-left-radius: 1px;border-bottom-right-radius: 1px}'
  },
  {
    message:  'should handle null value value',
    fixture:  'a{border-radius:null 2px 3px}',
    expected: 'a{border-top-right-radius: 2px;border-bottom-left-radius: 2px;border-bottom-right-radius: 3px}'
  },
  {
    message:  'should handle value null value',
    fixture:  'a{border-radius:1px null 3px}',
    expected: 'a{border-top-left-radius: 1px;border-bottom-right-radius: 3px}'
  }
];
