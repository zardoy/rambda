import {none} from './none'

const isEven = n => n % 2 === 0
const isOdd = n => n % 2 === 1
const arr = [1, 3, 5, 7, 9, 11]

test('when true', () => {
  expect(none(isEven, arr)).toBeTrue()
})

test('when false curried', () => {
  expect(none(isOdd)(arr)).toBeFalse()
})
