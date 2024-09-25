function distanceFromHqInBlocks(blocks) {
    const hqLocation = 42;
    const distance = Math.abs(blocks - hqLocation);
    console.log(`Distance from HQ in blocks: ${distance}`);
    return distance;
  }
  
  function distanceFromHqInFeet(blocks) {
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(blocks);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    console.log(`Distance from HQ in feet: ${distanceInFeet}`);
    return distanceInFeet;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start) * 264;
    console.log(`Distance travelled in feet: ${distance}`);
    return distance;
  }
  
  function calculatesFarePrice(start, destination) {    
    const distance = Math.abs(destination - start) * 264;
        if (distance > 2500) {
            return 'cannot travel that far';
        } else if (distance > 2000) {
            return 25;
        } else if (distance > 400) {
            return (distance - 400) * 0.02; 
        } else {
            return 0;
        }
    }
     

