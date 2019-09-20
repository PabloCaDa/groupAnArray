
//---Method One (by using Lodash library)---//
function groupAnArrayByChunk (array, divisor) {
  if (!validations(array, divisor)) return console.log('You need to put correct arguments')
  const [...copy] = array
  let chunkedArray = _.chunk(copy, divisor)
  return chunkedArray
}

//---Method Two (by using Vanilla JS)---//
function groupAnArrayVanillaJs (array, divisor) {
  if (!validations(array, divisor)) return console.log('You need to put correct arguments')
  const chunkedArray = []
  const [...copy] = array
  while(copy.length){
    chunkedArray.push(copy.splice(0,divisor))
  }
  return chunkedArray
}

function validations (array, divisor) {
  if(!divisor || divisor <= 0 || array.length === 0) return false
  return true
}