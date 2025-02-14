import {includes} from './includes'
import {cloneList} from './_internals/cloneList'

export function union(x, y) {
  if (arguments.length === 1) return _y => union(x, _y)

  const toReturn = cloneList(x)

  y.forEach(yInstance => {
    if (!includes(yInstance, x)) toReturn.push(yInstance)
  })

  return toReturn
}
