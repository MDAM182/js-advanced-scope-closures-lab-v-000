function produceDrivingRange(blockRange) {
  return function (startPoint, endPoint) {
      let range = parseInt(endPoint, 10) - parseInt(startPoint, 10)
      if (range > blockRange) {
        return `${range - blockRange} blocks out of range`
      } else {
        return `within range by ${blockRange - range}`
      }
    }
}

function produceTipCalculator(tipPercent){
    return function (tip) {
      return tip * tipPercent
    }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
    
  }

}
