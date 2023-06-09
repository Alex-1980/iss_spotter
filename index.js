const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });


// fetchCoordsByIP("142.116.159.170", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:' , coordinates);
// });


// const coordinates = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(coordinates, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', passTimes);
// });


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  
  for(const passTime of passTimes) {
    let riseTime = new Date(passTime.risetime).toString();
    let duration = passTime.duration
    
    console.log(`Next pass at ${riseTime} for ${duration} seconds!`)
  }
});