import cx from './cx'

describe('Classnames tests', () => {
  test('should work with nothing ', () => {
    expect(cx(1)).toBe('')
  })
  test('should work with object ', () => {
    expect(cx({ btn: true, 'btn-danger': false })).toBe('btn')
  })

  test('work with arrays', () => {
    expect(cx(['a', 'b', null, undefined, 0, 1])).toBe('a b')
  })
  test('work with mix', () => {
    expect(
      cx('btn', 'btn-primary', { 'btn-danger': true, 'btn-warning': false }, [
        'a',
        'b',
        null,
        undefined,
        0,
        1
      ])
    ).toBe('btn btn-primary btn-danger a b')
  })
})
