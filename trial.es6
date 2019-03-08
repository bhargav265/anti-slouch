import * as posenet from '@tensorflow-models/posenet';

console.log('start');

const imageScaleFactor = 0.50;
const flipHorizontal = false;
const outputStride = 16;
const imageElement = document.getElementById('human');
// load the posenet model
console.log('load the posenet model');
const net = await posenet.load();
const pose = await net.estimateSinglePose(imageElement, scaleFactor, flipHorizontal, outputStride);
console.log('end');
console.log(pose);
console.log(net);
