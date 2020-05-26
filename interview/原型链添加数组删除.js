
var arry = [1, 2, 3, 34, 3, 4]
Array.prototype.distinct = function() {
  let a = []
  this.forEach((item, index) => {
    a.indexOf(item) === -1 ? a.push(item) : ''
  })
  return a
}
console.log(arry.distinct())