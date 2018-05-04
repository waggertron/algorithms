// codecup problem 43

/*
* Convert every 4 digits into an integer:
*
* 0 = 0000
* 
* 5 = 0101
* 
* 9 = 1001
* 
* Reverse every 3 integers:
* 
* 401501 -> 104105
* 
* Convert every 3 integers into an ASCII character:
* 
* 104105 -> "hi"
* 
* 
* QUESTION
* Decrypt this: "001000000001000100000001100000000001100000000001"
*/
function asciiBitsToString(bits) {
  let ints = '';
  console.log(bits.length);
  const letterCount = Math.floor(bits.length / 4);
  for (let i = 0; i < letterCount; i += 1) {
    const bitSegment = bits.slice(i * 4, i * 4 + 4);
    console.log('bitSegment', bitSegment);
    let number = 0;
    for (let j = 3; j >= 0; j -= 1) {
      number += bitSegment[3 - j] * 2 ** j;
    }
    ints += String(number);
  }
  console.log(ints);
  const intSegments = ints.length / 3;
  let sentance = '';
  for (let i = 0; i < intSegments; i += 1) {
    const segment = ints.slice(i * 3, i * 3 + 3);
    // console.log(segment);
    console.log('segment', segment);
    sentance += String.fromCharCode(segment.split('').reverse().join(''));
    console.log('reversed', segment.split('').reverse().join(''));
    // console.log(segment);
  }
  return sentance;
}
console.log(asciiBitsToString('001000000001000100000001100000000001100000000001'));
