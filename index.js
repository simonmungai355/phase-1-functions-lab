function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42)
}



//////////////////////////////////////////////////////////////////////


function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(50);
  return distanceFromHqInBlocks(someValue) * 264
}



//////////////////////////////////////////////////////////////////////////////////

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264
}



//////////////////////////////////////////////////////////////////////////////////////


function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      // First 400 feet are free
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      // 2 cents per foot for distance between 400 and 2000 feet
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      // Flat fare for distance over 2000 feet and under 2500 feet
      return 25;
    } else {
      // Scuber does not allow rides over 2500 feet
      return "cannot travel that far";
    }
  }


  /////////////////////////////////////////////////////////////////////////////////////////