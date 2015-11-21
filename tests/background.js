export default [
  {
    message:  'remove null color',
    fixture:  'p{background: null url(images/bg.gif) no-repeat top right;}',
    expected: 'p{background: url(images/bg.gif) no-repeat top right;}'
  },
  {
    message:  'remove null image',
    fixture:  'p{background: #000 url(null) no-repeat top right;}',
    expected: 'p{background: #000 no-repeat top right;}'
  }
];
