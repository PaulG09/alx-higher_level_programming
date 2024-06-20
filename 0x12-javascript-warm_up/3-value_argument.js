#!/usr/bin/node
const [,, firstargs] = process.argv;
if (firstargs === undefined) {
  console.log('No argument');
} else {
  console.log('firstargs');
}
