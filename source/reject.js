import {filter} from './filter'

export function reject(predicate, list) {
  if (arguments.length === 1) return _list => reject(predicate, _list)

  return filter(x => !predicate(x), list)
}
