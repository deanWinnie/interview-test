export function randomNumber(arry=[],number=0){
  const length = arry.length
  let indexArray = []
  while(indexArray.length<number){
    let index = Math.floor(Math.random() * length)
    indexArray.push(index)
    indexArray = Array.from(new Set(indexArray))
  }
  return indexArray

}
