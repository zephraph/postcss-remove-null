export default [
  {
    message:  'should remove a single null',
    fixture:  'a{margin:null}',
    expected: 'a{}'
  },
  {
    message:  'should remove two nulls',
    fixture:  'a{margin:null null}',
    expected: 'a{}'
  },
  {
    message:  'should remove three nulls',
    fixture:  'a{margin:null null null}',
    expected: 'a{}'
  },
  {
    message:  'should remove four nulls',
    fixture:  'a{margin:null null null null}',
    expected: 'a{}'
  },
  {
    message:  'should break out right and left if top is null and right is defined',
    fixture:  'a{margin:null 1px}',
    expected: 'a{margin-right: 1px;margin-left: 1px}'
  },
  {
    message:  'should break out top and bottom if right is null and top is defined',
    fixture:  'a{margin:1px null}',
    expected: 'a{margin-top: 1px;margin-bottom: 1px}'
  },
  {
    message:  'should handle top and right defined with a null bottom',
    fixture:  'a{margin:1px 2px null}',
    expected: 'a{margin-top: 1px;margin-right: 2px;margin-left: 2px}'
  },
  {
    message:  'should handle add defined with null top',
    fixture:  'a{margin:null 2px 3px 4px}',
    expected: 'a{margin-right: 2px;margin-bottom: 3px;margin-left: 4px}'
  },
  {
    message:  'should handle add defined with null right',
    fixture:  'a{margin:1px null 3px 4px}',
    expected: 'a{margin-top: 1px;margin-bottom: 3px;margin-left: 4px}'
  },
  {
    message:  'should handle add defined with null bottom',
    fixture:  'a{margin:1px 2px null 4px}',
    expected: 'a{margin-top: 1px;margin-right: 2px;margin-left: 4px}'
  },
  {
    message:  'should handle add defined with null left',
    fixture:  'a{margin:1px 2px 3px null}',
    expected: 'a{margin-top: 1px;margin-right: 2px;margin-bottom: 3px}'
  },
  {
    message:  'should handle add defined with null right, left',
    fixture:  'a{margin:1px null 3px null}',
    expected: 'a{margin-top: 1px;margin-bottom: 3px}'
  },
  {
    message:  'should handle add defined with null top, bottom',
    fixture:  'a{margin:null 2px null 4px}',
    expected: 'a{margin-right: 2px;margin-left: 4px}'
  }
];
