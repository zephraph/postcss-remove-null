export default [
  {
    message:  'should remove single null',
    fixture:  'a{font:null small-caps bolder 16px/3 cursive;}',
    expected: 'a{font:small-caps bolder 16px/3 cursive;}'
  },
  {
    message:  'should remove multiple nulls',
    fixture:  'a{font:null small-caps null 16px/3px null;}',
    expected: 'a{font:small-caps 16px/3px;}'
  },
  {
    message:  'should remove font-size/line-height',
    fixture:  'a{font:bolder null/null cursive;}',
    expected: 'a{font:bolder cursive;}'
  },
  {
    message:  'should remove line-height',
    fixture:  'a{font:bolder 16px/null cursive;}',
    expected: 'a{font:bolder 16px cursive;}'
  },
  {
    message:  'should remove font-size and add a longhand line-height',
    fixture:  'a{font:bolder null/10px cursive;}',
    expected: 'a{font:bolder cursive;line-height:10px;}'
  },
  {
    message:  'should remove "/ line-height"',
    fixture:  'a{font:bolder 16px/ null cursive;}',
    expected: 'a{font:bolder 16px cursive;}'
  },
  {
    message:  'should remove " /line-height"',
    fixture:  'a{font:bolder 16px /null cursive;}',
    expected: 'a{font:bolder 16px cursive;}'
  },
  {
    message:  'should remove "font-size /" and add a longhand line-height',
    fixture:  'a{font:bolder null /10px cursive;}',
    expected: 'a{font:bolder cursive;line-height:10px;}'
  },
  {
    message:  'should remove "font-size / " and add a longhand line-height',
    fixture:  'a{font:bolder null / 10px cursive;}',
    expected: 'a{font:bolder cursive;line-height:10px;}'
  },
  {
    message:  'should remove "font-size/ line-height"',
    fixture:  'a{font:bolder null/ null cursive;}',
    expected: 'a{font:bolder cursive;}'
  }
];
