const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    for(const passTime of passTimes) {
      let riseTime = new Date(passTime.risetime).toString();
      let duration = passTime.duration
      
      console.log(`Next pass at ${riseTime} for ${duration} seconds!`)
    }
  })
  .catch((error) => {
    console.log("It didn't work: ", Error(error));
  });