
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
const getPointsFromResult = result => {

  return RESULT_VALUES[result];
}

// Check getPointsFromResult
// console.log(`points from a w: ${getPointsFromResult('w')}`);
// console.log(`points from a d: ${getPointsFromResult('d')}`);
// console.log(`points from a l: ${getPointsFromResult('l')}`);

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won
const getTotalPoints = result => {
  let totalPoints = 0;

  for(let i = 0; i < result.length; i++) {
    if(result[i] === 'w') totalPoints += RESULT_VALUES['w'];
    else if(result[i] === 'd') totalPoints += RESULT_VALUES['d'];
    else if(result[i] === 'l') totalPoints += RESULT_VALUES['l'];
  }
  return totalPoints;
}


// Check getTotalPoints
// console.log(getTotalPoints('wwdl')); // should equal 7
// console.log(`wwdl = ${getTotalPoints('wwdl')} points`); // should equal 7
// console.log(`wwdldd = ${getTotalPoints('wwdldd')} points`); // should equal 9
// console.log(`wwdlww = ${getTotalPoints('wwdlww')} points`); // should equal 13

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

const orderTeams = (...teams) => {
  for (const team of teams) {
    console.log(`${team.name}: ${getTotalPoints(team.results)}`);
  }
}

// Check orderTeams

orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);

// should log the following to the console:
// Sounders: 7
// Galaxy: 4