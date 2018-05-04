// dijkstra algo
function parseEquation(str) {
  const result = [];
  let numBuf = '';

  for (let i = 0; i < str.length; i += 1) {
    const cur = str[i];
    const isNum = Number.isInteger(parseInt(cur, 10));
    if (isNum) {
      // number
      numBuf += cur;
    } else {
      // not num
      if (numBuf) {
        result.push(numBuf);
        numBuf = '';
      }
      result.push(cur);
    }
  }
  return result;
}


function dijkstra(input) {
  const operands = [];
  const operators = [];

  for (let i = 0; i < input.length; i++) {
    const cur = input[i];
    if (cur === '(') {
      continue;
    } else if (cur === ')') {
      const second = operands.pop();
      const first = operands.pop();
      const operator = operators.pop();
      const result = eval(`(${first} ${operator} ${second})`);
      operands.push(String(result));
    } else if (!Number.isInteget(parseInt(cur, 10))) {
      // operand
      operators.push(cur);
    } else {
      // number 
      operands.push(cur);
    }
  }
  return operands.pop();
}


const numStr = [
  '(',
  '(',
  '(',
  '4',
  '+',
  '12',
  ')',
  '*',
  '(',
  '5',
  '-',
  '3',
  ')',
  ')',
].join('');

console.log(dijkstra(parseEquation(numStr)));
console.log(dijkstra([
  '(',
  '(',
  '(',
  '4',
  '+',
  '2',
  '+',
  '2',
  ')',
  '*',
  '(',
  '5',
  '-',
  '3',
  ')',
  ')',
]));
console.log(dijkstra([
  '(',
  '(',
  '(',
  '4',
  '+',
  '2',
  ')',
  '*',
  '(',
  '5',
  '-',
  '3',
  ')',
  ')',
  '/',
  '(',
  '6',
  '-',
  '3',
  ')',
  ')',
]));

