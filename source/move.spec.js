import {move} from './move'
const list = [1, 2, 3, 4]

test('happy', () => {
  const result = move(0, 1, list)

  expect(result).toEqual([2, 1, 3, 4])
})

test('with negative index', () => {
  const errorMessage = 'Rambda.move does not support negative indexes'
  expect(() => move(0, -1, list)).toThrowWithMessage(Error, errorMessage)
  expect(() => move(-1, 0, list)).toThrowWithMessage(Error, errorMessage)
})

test('when indexes are outside the list outbounds', () => {
  const result1 = move(10, 1, list)
  const result2 = move(1, 10, list)

  expect(result1).toEqual(list)
  expect(result2).toEqual(list)
})
