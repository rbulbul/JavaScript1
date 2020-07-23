'use strict';

const giveCompliment = (name) => {
  const compliments = [
    'a smart cookie',
    'lighting up the room',
    'like sunshine on a rainy day',
    'a candle in the darkness',
    'like a breath of fresh air',
    "someone's reason to smile",
    'great at figuring stuff out',
    'a great example to others',
    'an awesome friend',
    'a gift to those around you',
  ];
  const item = compliments[Math.floor(Math.random() * compliments.length)];
  console.log(`You're ${item}, ${name}!`);
};

giveCompliment('Noer');
giveCompliment('Noer');
giveCompliment('Noer');
