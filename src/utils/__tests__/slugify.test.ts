import slugify from '../slugify';

describe('utils/slugify', () => {
  test('it slugifies strings as expected', () => {
    expect(slugify('Clean Energy')).toBe('clean-energy');
    expect(slugify('Monty Python\'s "The Holy Grail"')).toBe(
      'monty-pythons-the-holy-grail'
    );
    expect(slugify('ABCs 123s')).toBe('abcs-123s');
  });
});
