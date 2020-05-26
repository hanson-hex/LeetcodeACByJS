function flatten(arr) {
  return arr.reduce(function(prev, item) {
    return prev.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}

let oldArr = [[1, 5, 4, 8], [5, 10, 12, 15]]
let newArr = oldArr.toString().split(',').map(item => +item)

let upRepeat = Array.from(new Set(newArr))

function handleSort () {
  return arr.sort(function (a, b) {
    return a - b
  })
}

console.log('newArr', newArr)
console.log('oldArr:', upRepeat.sort(function (a, b) {
  return a - b
}))