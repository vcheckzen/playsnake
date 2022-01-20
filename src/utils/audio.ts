const dieSound = require('assets/die.mp3');
const highSound = require('assets/high.mp3');
const lowSound = require('assets/low.mp3');

const RealSound = {
  die: new Audio(dieSound),
  high: new Audio(highSound),
  low: new Audio(lowSound),
};

export const Sound = (mute: boolean) => {
  return mute ? null : RealSound;
};
