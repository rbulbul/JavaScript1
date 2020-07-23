'use strict';

const tellFortune = (numChildren, partnerNames, locations, jobs) => {
  const randomChildren =
    numChildren[Math.floor(Math.random() * numChildren.length)];

  const randomNames =
    partnerNames[Math.floor(Math.random() * partnerNames.length)];

  const randomLocations =
    locations[Math.floor(Math.random() * locations.length)];

  const randomJobs = jobs[Math.floor(Math.random() * jobs.length)];

  const fortuneText = `You will be a ${randomJobs} in ${randomLocations}, married to ${randomNames} with ${randomChildren} kids`;
  return fortuneText;
};

const numChildren = ['1', '2', '3', '4', '5'];
const partnerNames = ['Mia', 'Olivia', 'Amelia', 'Noah', 'Lucas'];
const locations = [
  'Turkey',
  'The Netherlands',
  'The United States',
  'Hawaii',
  'Spain',
];
const jobs = ['programmer', 'farmer', 'photographer', 'doctor', 'dentist'];
console.log(tellFortune(numChildren, partnerNames, locations, jobs));
