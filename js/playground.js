console.log(colorCode("grey"));



function colorCode(color){
  let colors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  }
  return (colors[color])
}

const COLORS = undefined
