function forLoop(array) {
  for (let i = 0; i<25;i++) {
    if (i==1) {
      console.log(`I am ${i} strange loop.`)
    }
    else {
      console.log(`I am ${i} strange loops`)
    }
  }
}

function whileLoop(number) {
  var count = number
  while (number>0) {
    console.log(number)
    number = number - 1
  }
  return "done"
}